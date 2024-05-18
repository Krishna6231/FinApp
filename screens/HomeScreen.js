// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import NavBar from './NavBar';
import LottieView from 'lottie-react-native';

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
      <Pressable style={styles.button} onPress={() => navigation.navigate('Demo')}><Text style={styles.tex}>LOGIN</Text></Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Demo')}><Text style={styles.tex}>SIGN UP</Text></Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  navBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 15,
  },
  iconContainer: {
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
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
    height: 50,
    backgroundColor: '#28EE8B',
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
