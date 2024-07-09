import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../assets/Colors';

const Chart = ({ categoryList, userEmail }) => {
  const [sliceColors, setSliceColors] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    updateChart();
  }, [categoryList, userEmail]);

  const updateChart = () => {
    let totalValues = [];
    let colors = [];
    const filteredCategories = categoryList.filter(category => category.created_by === userEmail);
    filteredCategories.forEach((category) => {
      totalValues.push(parseFloat(category.budget) || 0);
      colors.push(category.color);
    });
    setValues(totalValues);
    setSliceColors(colors);
  };

  const totalEstimate = values.reduce((a, b) => a + b, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Estimate: ₹{totalEstimate}</Text>
      <View style={styles.chartContainer}>
        {parseFloat(totalEstimate) > 0 ? (
          <PieChart
            widthAndHeight={150}
            series={values}
            sliceColor={sliceColors}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        ) : (
<PieChart
            widthAndHeight={150}
            series={[1]}  // One slice
            sliceColor={['#808080']}  // Grey color
            coverRadius={0.45}
            coverFill={'#FFF'}
          />        )}
        <View style={styles.legendContainer}>
          {categoryList?.map((category, index) => (
            <View key={index} style={styles.legendItem}>
              <MaterialCommunityIcons name="checkbox-blank-circle" size={24} color={category.color} />
              <Text style={styles.legendText}>{category.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  noData: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  legendContainer: {
    marginLeft: 20,
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

export default Chart;
