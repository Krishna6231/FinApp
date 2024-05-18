// screens/DemoScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
//import LottiePlayer from '@dotlottie/react-player';


const DemoScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView style={styles.giff}
        source={require('../assets/Animation.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  giff: {
    marginTop: 375,
    width: 300,
    height: 350,
  }
});

export default DemoScreen;