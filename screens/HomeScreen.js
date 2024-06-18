import React from 'react';
import { View, StyleSheet, Text, Button, Pressable } from 'react-native';
import NavBar from './NavBar';
import LottieView from 'lottie-react-native';
import { client } from '../KindeConfig';
import services from '../services';

const HomeScreen = ({ navigation }) => {

  const handleLogin = async () => {
    try {
      const token = await client.login();
      if (token) {
        // User was authenticated
        await services.storeData('login', 'true');
        navigation.navigate('Lobby'); // Navigate to the "Lobby" screen
      } else {
        // Handle authentication failure
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      // Handle authentication error
    }
  };

  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      // User was authenticated
      navigation.navigate('Home'); // Navigate to the "Auth" screen for web authentication
    }
  };

  return (
    <View>
      <NavBar navigation={navigation} />
      <Text>Hello</Text>
      <LottieView
        style={styles.giff}
        source={require('../assets/Animation.json')}
        autoPlay
        loop
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.signupContainer}>
        <Text>Do not have an account? </Text>
        <Pressable onPress={handleSignUp}>
          <Text style={styles.signtext}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  giff: {
    marginTop: 60,
    width: 300,
    height: 350,
    left: 40,
    margin: 30,
  },
  signupContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  signtext: {
    color: 'blue',
  },
});

export default HomeScreen;
