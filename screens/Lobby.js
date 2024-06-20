import React, { useEffect } from 'react';
import { View, StyleSheet, BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { client } from '../KindeConfig';
import { supabase } from '../SupabaseConfig';
import Header from './Header';
import Chart from './Chart';

const Lobby = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'EXIT', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const getCategoryList = async () => {
    const user = await client.getUserDetails();
    const { data, error } = await supabase
      .from('Category')
      .select('*')
      .eq('created_by', user.email);
    console.log("Data", data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Chart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily:'outfit',
    marginTop: 30,
    flex: 1,
    backgroundColor: '#000000', // Black background color
    paddingTop: 0, // Adjust as needed
  },
});

export default Lobby;
