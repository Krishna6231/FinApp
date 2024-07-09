import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import Header from './Header'
import Chart from './Chart'
export default function Test() {
  return (
    <View style={styles.container}>
      <Header/>
      <Chart categoryList={categoryList} />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        marginTop:30,
    }
})