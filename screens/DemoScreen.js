// screens/DemoScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const DemoScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/Animation-1716057036329.json')}
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
});

export default DemoScreen;
