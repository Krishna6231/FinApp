import { View, Text , StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Colors from '../assets/Colors'

export default function Expense() {

const[selectedColor, setSelectedColor] = useState(Colors.PRIMARY)

  return (
    <View>
      <Text>Expense</Text>
      <View >
        <TextInput 
        style={[style.nameInput,{backgroundColor:selectedColor}]}
        maxLength={2}
        ></TextInput>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  nameInput:{

  },
});