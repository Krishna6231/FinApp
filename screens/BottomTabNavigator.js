// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lobby from './Lobby';
import Settings from './SettingsScreen'; // Assuming you have a Settings screen
import Icon from 'react-native-vector-icons/Ionicons';
import Expense from './Expense';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Lobby') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }else if (route.name === 'Expense') {
            iconName = 'cash';
          } 

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarStyle: {
          backgroundColor: '#000000',
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen name="Lobby" options={{ headerShown: false }} component={Lobby} />
      <Tab.Screen name="Expense" options={{headerTitle:'Add Expense'}} component={Expense} />

      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
