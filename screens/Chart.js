import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../assets/Colors';

export default function Chart({ categoryList }) {
  const [sliceColors, setSliceColors] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    updateChart();
  }, [categoryList]);

  const updateChart = () => {
    let totalValues = [];
    let colors = [];
    categoryList.forEach((category, index) => {
      totalValues.push(category.budget);
      colors.push(Colors.COLOR_LIST[index % Colors.COLOR_LIST.length]);
    });
    setValues(totalValues);
    setSliceColors(colors);
  };

  const totalEstimate = values.reduce((a, b) => a + b, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Estimate: ₹{totalEstimate}</Text>
      {totalEstimate > 0 ? (
        <PieChart
          widthAndHeight={150}
          series={values}
          sliceColor={sliceColors}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
      ) : (
        <Text style={styles.noData}>No data to display</Text>
      )}
      <View style={styles.legendContainer}>
        {categoryList?.map((category, index) => (
          <View key={index} style={styles.legendItem}>
            <MaterialCommunityIcons name="checkbox-blank-circle" size={24} color={Colors.COLOR_LIST[index % Colors.COLOR_LIST.length]} />
            <Text style={styles.legendText}>{category.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  noData: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  legendContainer: {
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendText: {
    color: '#FFFFFF',
    marginLeft: 5,
  },
});
