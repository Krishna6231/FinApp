import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Settings from './screens/SettingsScreen';
import LoginStackNavigator from './screens/LoginStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" options={{ headerShown: false }} component={Settings} />
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
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

            if (route.name === 'MainHome') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            } 

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="MainHome" options={{headerShown: false}} component={LoginStackNavigator} />
        <Tab.Screen name="Settings" options={{headerShown: false}} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
