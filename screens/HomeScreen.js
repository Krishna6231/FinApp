// screens/HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import NavBar from './NavBar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <NavBar navigation={navigation}/>
      </View>
      
      <Button
        title="Go to Demo Screen"
        onPress={() => navigation.navigate('Demo')}
      />
      
       {/* <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      /> */}
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
});

export default HomeScreen;
