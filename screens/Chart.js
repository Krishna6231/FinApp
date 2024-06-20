import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import {MaterialCommunityIcons} from '@expo/vector-icons';
export default class Chart extends Component {
  render() {
    const widthAndHeight = 150;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ['#0077c2', '#00aaff', '#00e676', '#ff5252', '#ff1744']; // Custom colors with shades of blue, green, and red

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Total Estimate : ₹0</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
          <MaterialCommunityIcons name="checkbox-blank-circle" size={24} color='#0077c2' />
          <Text>NA</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    backgroundColor: '#000000',
    padding: 20,
    left:15, // Black background color
  },
  title: {
    fontSize: 20,
    margin: 10,
    color: '#FFFFFF', // White text color
  },
});
