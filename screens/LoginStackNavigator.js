import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Signup from './Signup';
import HomeScreen from './HomeScreen'; // Import HomeScreen
import NavBar from './NavBar'; // Import NavBar

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide header for HomeScreen
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }} // Hide header for LoginScreen
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }} // Hide header for SignupScreen
      />
      <Stack.Screen
        name="NavBar"
        component={NavBar}
        options={{ headerShown: false }} // Hide header for NavBar
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;
