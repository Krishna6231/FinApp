// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './screens/StackNavigator';
// import { useFonts } from 'expo-font';
// const [fontsLoaded, fontError]  = useFonts({
//   'outfit': require ('./assets/fonts/Outfit-Regular.ttf'),
//   'outfit-medium': require ('./assets/fonts/Outfit-Medium.ttf'),
//   'outfit-bold': require ('./assets/fonts/Outfit-Bold.ttf')

// })

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
