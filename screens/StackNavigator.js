// navigation/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BottomTabNavigator from './BottomTabNavigator';
import CategoryDetail from './CategoryDetail';
import Colors from '../assets/Colors';
import Login from './Login';
import Test from './Test';
import SignUp from './Signup';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide header for HomeScreen
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} // Hide header for HomeScreen
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{ headerShown: false }} // Hide header for HomeScreen
      />
<Stack.Screen
        name="Test"
        component={Test}
        options={{ headerShown: false }} // Hide header for HomeScreen
      />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }} // Hide header for BottomTabNavigator
      />
       <Stack.Screen 
          name="Detail" 
          component={CategoryDetail} 
          options={({ navigation }) => ({
            title: 'Detail',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                <Ionicons name="arrow-back" size={24} color={Colors.WHITE} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: Colors.BLACK,
            },
            headerTintColor: Colors.WHITE,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
    </Stack.Navigator>
  );
};

export default StackNavigator;
