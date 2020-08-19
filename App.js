/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

const Drawer = createDrawerNavigator();



const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        initialRouteName="HomeDrawer"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator> */}
      <RootStackScreen />
    </NavigationContainer>
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
