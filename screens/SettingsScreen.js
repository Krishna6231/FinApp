import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import services from '../services';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      await services.storeData('login', 'false');
      navigation.replace('Home'); // Navigate back to the home screen after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#FFFFFF',
  },
});

export default SettingsScreen;
