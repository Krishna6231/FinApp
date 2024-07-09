import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import Colors from '../assets/Colors';
import ColorPicker from './ColorPicker';
import { supabase } from '../SupabaseConfig';
import { getCurrentUser } from '../FirebaseConfig';

export default function Expense() {
  const [ename, setEname] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedColor, setSelectedColor] = useState(Colors.PRIMARY);
  const [selectedIcon, setSelectedIcon] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserEmail();
  }, []);

  const fetchUserEmail = async () => {
    try {
      const email = await getCurrentUser();
      setUserEmail(email);
    } catch (error) {
      console.error('Error fetching user email:', error.message);
      ToastAndroid.show('Error fetching user data', ToastAndroid.SHORT);
    }
  };

  const onCreateCategory = async () => {
    if (!userEmail) {
      ToastAndroid.show('User email not available', ToastAndroid.SHORT);
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from('Category')
        .insert({
          name: ename,
          budget: parseFloat(amount), // Ensure amount is a number
          color: selectedColor,
          icon: selectedIcon,
          created_by: userEmail
        });

      if (error) {
        throw error;
      }

      console.log('Category created:', data);
      ToastAndroid.show('Category Created', ToastAndroid.SHORT);

      // Clear input fields after successful creation
      setEname('');
      setAmount('');
      setSelectedColor(Colors.PRIMARY);
      setSelectedIcon('');
    } catch (error) {
      console.error('Error creating category:', error.message);
      ToastAndroid.show('Error creating category', ToastAndroid.SHORT);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextInput
          style={[styles.iconInput, { backgroundColor: selectedColor }]}
          value={selectedIcon}
          onChangeText={(value) => setSelectedIcon(value)}
        />
        <Text style={styles.label}>Choose Color</Text>
      </View>
      <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={(color) => setSelectedColor(color)}
      />

      <Text style={styles.label}>Expense Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Expense Name"
        value={ename}
        onChangeText={(v)=>setEname(v)}
      ></TextInput>

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Amount'
        value={amount}
        onChangeText={(v)=>setAmount(v)}
      />
      <TouchableOpacity
        disabled={isLoading || !selectedColor || !selectedIcon || !ename || !amount || !userEmail}
        style={[styles.button, { opacity: isLoading ? 0.5 : 1 }]} 
        onPress={onCreateCategory}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Adding...' : 'Add Expense'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  iconInput: {
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
    paddingHorizontal: 27,
    borderRadius: 99,
    color: Colors.WHITE,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.BLACK,
  },
  label: {
    fontSize: 16,
    color: Colors.BLACK,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    paddingHorizontal: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#000',
    padding: 14,
    top: 10,
    borderRadius: 5
  },
});
