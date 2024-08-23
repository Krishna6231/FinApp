import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';
import { useNavigation } from '@react-navigation/native';


const CategoryList = ({ categoryList }) => {
    const navigation = useNavigation();

  const onCategoryClick = (category) => {
    navigation.navigate('Detail', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List</Text>
      <View>
      {categoryList.length > 0 ? (
        categoryList.map((category, index) => {
          console.log(`Category: ${category.name}, Budget: ${category.budget}`);
          return (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => onCategoryClick(category)}
            >
              <View>
                <Text style={styles.iconText}>{category.icon}</Text>
              </View>
              <View style={styles.subContainer}>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={[styles.categoryBudget, {fontFamily: 'Roboto'}]}>₹{category.budget}</Text>

              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <Text style={styles.noDataText}>Add expenses to view the list</Text>
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    color: Colors.WHITE,
  },
  title: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GRAY,
    borderRadius: 15,
    marginRight: 10,
    width: 30,
    height: 30,
  },
  iconText: {
    fontSize: 20,
    padding: 7,
    borderRadius: 15,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '87%', // Ensure the container takes full width
    flexWrap: 'nowrap', // Prevent text wrapping
  },
  categoryBudget: {
    color: Colors.WHITE,
    fontSize: 21,
    textAlign: 'right', // Ensure the text aligns properly
    overflow: 'visible', // Prevent clipping
  },
  categoryName: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 21,
  },
  noDataText: {
    color: Colors.GRAY,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CategoryList;
