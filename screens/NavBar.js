// components/NavBar.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import services from '../services';

const NavBar = () => {
  const navigation = useNavigation();

  const handleLoginNavigation = () => {
    navigation.navigate('Login'); // Navigate to Login
  };

  return (
    <View style={styles.navBar}>
    <StatusBar barStyle="light-content" />
    <TouchableOpacity style={styles.iconContainer}>
      <Icon name="menu" size={28} color="white" />
    </TouchableOpacity>
    <Text style={styles.title}>Finance</Text>
    <TouchableOpacity style={styles.iconContainer} onPress={handleLoginNavigation}>
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
