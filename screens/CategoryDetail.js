import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { supabase } from '../SupabaseConfig';

const colorOptions = ['#0077c2', '#00aaff', '#00e676', '#ff5252', '#ff1744', '#581845', '#DAF7A6', '#33FF57', '#33FFDA'];

export default function CategoryDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params;

  const [name, setName] = useState(category.name);
  const [budget, setBudget] = useState(category.budget.toString());
  const [color, setColor] = useState(category.color);

  const [isNameEditable, setIsNameEditable] = useState(true);
  const [isBudgetEditable, setIsBudgetEditable] = useState(true);
  const [colorModalVisible, setColorModalVisible] = useState(false);

  const handleUpdate = async () => {
    const { data, error } = await supabase
      .from('Category')
      .update({ name, budget: parseFloat(budget), color })
      .eq('id', category.id);

    if (error) {
      Alert.alert('Error', 'Failed to update category');
    } else {
      Alert.alert('Success', 'Category updated successfully');
      navigation.goBack();
    }
  };

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('Category')
      .delete()
      .eq('id', category.id);

    if (error) {
      Alert.alert('Error', 'Failed to delete category');
    } else {
      Alert.alert('Success', 'Category deleted successfully');
      navigation.goBack();
    }
  };

  const renderColorOption = ({ item }) => (
    <TouchableOpacity onPress={() => { setColor(item); setColorModalVisible(false); }}>
      <View style={[styles.colorOption, { backgroundColor: item }]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Name   :</Text>
        <TextInput
          style={[styles.input, isNameEditable && styles.editableInput]}
          value={name}
          onChangeText={setName}
          editable={isNameEditable}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Budget :</Text>
        <TextInput
          style={[styles.input, isBudgetEditable && styles.editableInput]}
          value={budget}
          keyboardType="numeric"
          onChangeText={setBudget}
          editable={isBudgetEditable}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Color    :</Text>
        <TouchableOpacity onPress={() => setColorModalVisible(true)}>
          <View style={[styles.colorBox, { backgroundColor: color }]} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>

      <Modal visible={colorModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Color</Text>
            <FlatList
              data={colorOptions}
              renderItem={renderColorOption}
              keyExtractor={(item) => item}
              horizontal
            />
            <TouchableOpacity onPress={() => setColorModalVisible(false)} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  label: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  editableInput: {
    backgroundColor: 'white',
  },
  
  updateButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  updateButtonText: {
    color: 'black',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: 'white',
  },
});
