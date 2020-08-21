/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainTabScreen from './screens/MiantabScreen'
import DrawerContent from './screens/DrawerContent'
import BookmarkScreen from './screens/BookmarkScreen'
import SupportScreen from './screens/SupportScreen'
import SettingScreen from './screens/SettingScreen'
import RootStackScreen from './screens/RootStackScreen'
import { AuthContext } from './components/context'
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null
}

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case 'RETRIEVE_TOKEN':
      return { ...prevState, userToken: action.token, isLoading: false }
    case 'LOGIN':
      return { ...prevState, userName: action.id, userToken: action.token, isLoading: false }
    case 'LOGOUT':
      return { ...initialLoginState, isLoading: false }
    case 'REGISTER':
      return { ...prevState, userName: action.id, userToken: action.token, isLoading: false }
  }
}

const App: () => React$Node = () => {

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      let userToken
      let userName
      userToken = null
      try {
        userToken = String(foundUser[0].userToken)
        userName = String(foundUser[0].username)
        await AsyncStorage.setItem('userToken', userToken)
      } catch (error) {
        console.log(error)
      }
      dispatch({ type: "LOGIN", id: userName, token: userToken })
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    }
  }), [])

  useEffect(() => {

    const getToken = async () => {
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (error) {
        console.log('error')
      }
      dispatch({ type: "REGISTER", token: userToken })
    }
    getToken();
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" animating={true} color="#009387" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            initialRouteName="HomeDrawer"
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
          </Drawer.Navigator>
        ) : (
            <RootStackScreen />
          )}

      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
