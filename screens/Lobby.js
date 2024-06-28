import React, { useEffect, useState } from 'react';
import { View, StyleSheet, BackHandler, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { client } from '../KindeConfig';
import { supabase } from '../SupabaseConfig';
import Header from './Header';
import Chart from './Chart';
import CategoryList from './CategoryList';
import Colors from '../assets/Colors';
import { RefreshControl } from 'react-native-gesture-handler';

const Lobby = () => {
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useState([]);
  const [loading,setLoading]= useState(false);
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
    setLoading(true);
    const user = await client.getUserDetails();
    const { data, error } = await supabase
      .from('Category')
      .select('*')
      .eq('created_by', user.email);
    console.log('Data', data);
    setCategoryList(data);
    data&&setLoading(false)
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <ScrollView style={styles.container} refreshControl={
      <RefreshControl
      onRefresh={()=>getCategoryList()}
      refreshing={loading}
      />
    }>
      <Header />
      <Chart categoryList={categoryList} />
      <CategoryList categoryList={categoryList} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK, // Use Colors.BLACK from your Colors file
    padding: 10, // Adjust as needed
    marginTop:30
  },
});

export default Lobby;
