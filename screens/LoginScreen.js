// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email && password) {
      // good to go
      navigation.navigate('Lobby');
    } else {
      // handle error
      console.log("Email and password must not be empty");
    }
  };

  const handleSignupNavigation = () => {
    navigation.navigate('Signup');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.animationContainer}>
        <LottieView
          style={styles.animation}
          source={require('../assets/Login.json')}
          autoPlay
          loop
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button style={styles.button} title="Login" onPress={handleSubmit} />
        <View style={styles.signupContainer}>
          <Text>Do not have an account? </Text>
          <Pressable onPress={handleSignupNavigation}>
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
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  animation: {
    width: 300,
    height: 300,
  },
  inputContainer: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  signupContainer: {
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
  },
  signtext: {
    fontStyle: 'italic',
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
