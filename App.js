// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './screens/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
