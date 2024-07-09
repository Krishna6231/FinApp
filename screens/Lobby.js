import React, { useEffect, useState } from 'react';
import { View, StyleSheet, BackHandler, Alert, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../SupabaseConfig';
import Header from './Header';
import Chart from './Chart';
import CategoryList from './CategoryList';
import Colors from '../assets/Colors';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Lobby = () => {
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');

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

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    return () => unsubscribe();
  }, []);

  const getCategoryList = async () => {
    if (!userEmail) {
      console.log('User email is not set, skipping fetch');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('Category')
        .select('*')
        .eq('created_by', userEmail);

      if (error) {
        console.error('Error fetching categories:', error.message);
        setLoading(false);
        return;
      }

      console.log('Fetched categories:', data);
      setCategoryList(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, [userEmail]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          onRefresh={getCategoryList}
          refreshing={loading}
          colors={[Colors.WHITE]}
        />
      }
    >
      <Header />
      <Chart categoryList={categoryList} userEmail={userEmail} />
      <CategoryList categoryList={categoryList} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    padding: 10,
    marginTop: 30,
  },
});

export default Lobby;
