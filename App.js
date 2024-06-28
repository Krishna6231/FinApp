import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import StackNavigator from './screens/StackNavigator';

SplashScreen.preventAutoHideAsync(); // Prevent splash screen from auto-hiding

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
        'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
        'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
