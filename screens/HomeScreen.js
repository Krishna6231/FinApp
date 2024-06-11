// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavBar from './NavBar';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View>
      <NavBar navigation={navigation}/>
      </View>

      <View><Text>Hello</Text></View>
      
      <View>
      <LottieView style={styles.giff}
        source={require('../assets/Animation.json')}
        autoPlay
        loop
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  icon: {
    marginRight: 10,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  giff: {
    marginTop: 60,
    width: 300,
    height: 350,
    left: 40,
    margin: 30,
  },
});

export default HomeScreen;
