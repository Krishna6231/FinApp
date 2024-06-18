import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { client } from '../KindeConfig';
import services from '../services';
const SettingsScreen = ({navigation}) => {
  const handleLogout = async () => {
    try {
      await client.logout();
      await services.storeData('login', 'false');
      navigation.replace('Home'); // Navigate back to the home screen after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
 
  logoutButton: {
    position: 'absolute',
    right: 10,
    top: 70,
    backgroundColor: '#333333',
    padding: 30,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#FFFFFF',
  },
});

export default SettingsScreen