import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginStackNavigator from './screens/LoginStackNavigator';
import Settings from './screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
        })}
      >
        <Tab.Screen name="MainHome" options={{ headerShown: false }} component={LoginStackNavigator} />
        <Tab.Screen name="Settings" options={{ headerShown: false }} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
