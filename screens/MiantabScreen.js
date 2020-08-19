import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Mate } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeStack = createStackNavigator()
const DetailStack = createStackNavigator()

const Tab = createMaterialBottomTabNavigator()

export default MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarColor: "#009387",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailStackScreen}
                options={{
                    tabBarColor: "#860b96",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-notifications" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarColor: "#694fad",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarColor: "#d02860",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-aperture" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#009387"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25}
                            backgroundColor="#009387"
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                }}
            />
        </HomeStack.Navigator>
    )
}

const DetailStackScreen = ({ navigation }) => {
    return (
        <DetailStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#860b96"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <DetailStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25}
                            backgroundColor="#860b96"
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                }}
            />
        </DetailStack.Navigator>
    )
}