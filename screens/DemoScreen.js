import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Gif from '../assets/Animation.gif';
const DemoScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={Gif}
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
