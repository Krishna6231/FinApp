import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../assets/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ColorPicker() {
  return (
    <View style={{
        display: 'flex',
        flexDirection:'center',
        gap:20,
        marginTop:20,
    }}>
      {Colors.COLOR_LIST.map((color,index)=>{
        <TouchableOpacity 
        key={index}
        style={{
            height:30,
            width:30,
            backgroundColor: color,
            borderRadius:99
        }}>
            </TouchableOpacity>
      })}
    </View>
  )
}