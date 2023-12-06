

// src/navigation/MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import LiveTvScreen from '../screens/LiveTvScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'sandra',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name={focused ? 'home' : 'home'} // Replace with your icon names
            size={focused ? 30 : 24} // Increase size when focused
            color={tintColor}
          />
        ),
      },
    },
    LiveTV: {
      screen: LiveTvScreen,
      navigationOptions: {
        tabBarLabel: 'LiveTV',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name={focused ? 'video-camera' : 'video-camera'} // Replace with your icon names
            size={focused ? 30 : 24} // Increase size when focused
            color={tintColor}
          />
        ),
      },
    },
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        tabBarLabel: 'Categories',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name={focused ? 'list' : 'list'} // Replace with your icon names
            size={focused ? 30 : 24} // Increase size when focused
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'rgb(13,85,12)',
      inactiveTintColor: 'gray',
      style: {
        display: 'flex',
      },
    },
  }
);

export default MainTabNavigator;
