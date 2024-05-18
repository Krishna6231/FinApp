// components/NavBar.js

import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavBar = ({navigation}) => {
  return (
    <View style={styles.navBar}>
    <StatusBar barStyle="light-content" />
    <TouchableOpacity style={styles.iconContainer}>
      <Icon name="menu" size={28} color="white" />
    </TouchableOpacity>
    <Text style={styles.title}>Finance</Text>
    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Login')}>
      <Icon name="login" size={28} color="white" />
    </TouchableOpacity>
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

export default NavBar;
