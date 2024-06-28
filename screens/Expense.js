import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Colors from '../assets/Colors'
import ColorPicker from './ColorPicker';
import { supabase } from '../SupabaseConfig';
import { client } from '../KindeConfig';
import CategoryList from './CategoryList';
export default function Expense() {

  const [ename, setEname] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedColor, setSelectedColor] = useState(Colors.PRIMARY);
  const [selectedIcon, setSelectedIcon] = useState('');


const onCreateCategory= async()=> {
  const user= await client.getUserDetails();
const { data, error } = await supabase
.from('Category')
.insert({
   name: ename,
   budget: amount ,
   color: selectedColor,
  icon: selectedIcon,
   created_by: user.email 
})
.select()
console.log(data);
if(data){
    ToastAndroid.show('Category Created', ToastAndroid.SHORT)
}
        
}

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

      disabled={!selectedColor&&!selectedIcon&&!ename&&!amount}
        style={styles.button} onPress={onCreateCategory} color={Colors.BLACK} >
        <Text style={{
          color: Colors.WHITE,
          fontSize: 16,
          textAlign: 'center'
        }}>Add Expense</Text>
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
  button: {
    backgroundColor: '#000',

    padding: 14,
    top: 10,
    borderRadius: 5

  },

});