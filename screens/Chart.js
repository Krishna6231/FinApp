import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class Chart extends Component {
  render() {
    const widthAndHeight = 250;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ['#0077c2', '#00aaff', '#00e676', '#ff5252', '#ff1744']; // Custom colors with shades of blue, green, and red

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Doughnut Chart</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000', // Black background color
  },
  title: {
    fontSize: 24,
    margin: 10,
    color: '#FFFFFF', // White text color
  },
});
