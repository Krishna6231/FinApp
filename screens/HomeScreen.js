// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import NavBar from './NavBar';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View>
      <NavBar navigation={navigation}/>
      </View>
      
      <View>
      <LottieView style={styles.giff}
        source={require('../assets/Animation.json')}
        autoPlay
        loop
      />
      </View>
      <View style={styles.opts}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}><Text style={styles.tex}>Login</Text></Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Demo')}><Text style={styles.tex}>SIGN UP</Text></Pressable>
      <Pressable style={styles.google} onPress={() => navigation.navigate('Demo')}>
        <Icon name="logo-google" size={20} color="#dd7973" style={styles.icon} />
        <Text style={styles.text}>Sign In with Google</Text>
      </Pressable>     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  google: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
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
  opts: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 51,
    backgroundColor: '#a881af',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  tex: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
