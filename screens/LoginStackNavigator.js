import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Lobby from './Lobby';

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
        name="Lobby"
        component={Lobby}
        options={{ headerShown: false }} // Hide header for Lobby
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;
