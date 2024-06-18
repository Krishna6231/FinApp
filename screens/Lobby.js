import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { client } from '../KindeConfig';
import services from '../services';
import Header from './Header';
import Chart from './Chart';

const Lobby = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    getCategoryList();
  }, []);

  const handleLogout = async () => {
    try {
      await client.logout();
      await services.storeData('login', 'false');
      navigation.replace('Home'); // Navigate back to the home screen after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const getCategoryList = async () => {
    const user = await client.getUserDetails();
    const { data, error } = await supabase.from('Category').select('*').eq('created_by', user.email);
    console.log("Data", data);
  };

  return (
    <View>
      <Text>Lobby</Text>
      <Pressable onPress={handleLogout}>

        <Header/>
        <Chart/>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Lobby;
