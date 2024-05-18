import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DemoScreen from './screens/DemoScreen';
import LoginScreen from './screens/LoginScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="Demo" component={DemoScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Login') {
            iconName = 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeStack} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
