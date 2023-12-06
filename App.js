import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import LiveTvScreen from './src/screens/LiveTvScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { MaterialIcons } from '@expo/vector-icons';
import Header from './src/components/Header';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'rgb(13,85,12)',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarLabelStyle: {
            fontSize: 16, // Adjust the font size of the icon labels
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={30} /> // Increase icon size to 30
            ),
          }}
        />
        <Tab.Screen
          name="LiveTV"
          component={LiveTvScreen}
          options={{
            tabBarLabel: 'Live TV',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="live-tv" color={color} size={30} /> // Increase icon size to 30
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="category" color={color} size={30} /> // Increase icon size to 30
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
