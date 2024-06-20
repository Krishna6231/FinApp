import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { client } from '../KindeConfig';
import services from '../services';
import { CommonActions } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const checkUserAuth = async () => {
    const result = await services.getData('login');
    if (result === 'true') {
      // Navigate to the main screen if the user is already logged in
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        })
      );
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  const handleLogin = async () => {
    try {
      const token = await client.login();
      if (token) {
        // User was authenticated
        await services.storeData('login', 'true');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          })
        ); // Reset the navigation stack
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
      navigation.navigate('Auth'); // Navigate to the "Auth" screen for web authentication
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.appNameContainer}>
        <Text style={styles.appName}>FinTrack</Text>
      </View>

      <View style={styles.animationContainer}>
        <LottieView
          style={styles.giff}
          source={require('../assets/Animation.json')}
          autoPlay
          loop
        />
      </View>

      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Do not have an account? </Text>
          <Pressable onPress={handleSignUp}>
            <Text style={styles.signtext}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  navContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  appNameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  appName: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  animationContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  giff: {
    width: 300,
    height: 350,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signupText: {
    color: '#FFFFFF',
  },
  signtext: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default HomeScreen;
