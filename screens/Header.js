import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { client } from '../KindeConfig';

export default function Header() {
  const [user, setUser] = useState();
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const user = await client.getUserDetails();
    setUser(user);
  };
  const handleLogout = async () => {
    try {
      await client.logout();
      await services.storeData('login', 'false');
      navigation.replace('Home'); // Navigate back to the home screen after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.greetingText}>Hello, {user?.given_name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={{ uri: user?.picture }}
          style={styles.userImage}
        />
        <TouchableOpacity onPress={toggleLogout} style={styles.arrowButton}>
          <Ionicons name={showLogout ? 'chevron-up' : 'chevron-down'} size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      {showLogout && (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000000',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // This makes the image circular
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginLeft: 10,
  },
  arrowButton: {
    marginLeft: 10,
  },
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
