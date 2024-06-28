import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../assets/Colors';

const ColorPicker = ({ selectedColor, setSelectedColor }) => {
  return (
    <View style={styles.container}>
      {Colors.COLOR_LIST.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.colorCircle,
            { backgroundColor: color },
            selectedColor === color && styles.selected
          ]}
          onPress={() => setSelectedColor(color)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 99,
    marginHorizontal: 5,
  },
  selected: {
    borderWidth: 5,
    borderColor: '#000',
  },
});

export default ColorPicker;
