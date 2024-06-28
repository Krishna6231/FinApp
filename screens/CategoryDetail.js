import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { supabase } from '../SupabaseConfig';
import Colors from '../assets/Colors';

const colorOptions = ['#0077c2', '#00aaff', '#00e676', '#ff5252', '#ff1744'];

export default function CategoryDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params;

  const [name, setName] = useState(category.name);
  const [budget, setBudget] = useState(category.budget.toString());
  const [color, setColor] = useState(category.color);

  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isBudgetEditable, setIsBudgetEditable] = useState(false);
  const [isColorEditable, setIsColorEditable] = useState(false);
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
        <View style={[styles.colorBox, { backgroundColor: color }]} />
        <Text style={styles.label}>name</Text>
        <TextInput
          style={[styles.input, isNameEditable && styles.editableInput]}
          value={name}
          onChangeText={setName}
          editable={isNameEditable}
        />
        
        <TouchableOpacity onPress={() => setIsNameEditable(!isNameEditable)}>
          <Feather name="edit" size={24} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Budget: </Text>
        <TextInput
          style={[styles.input, isBudgetEditable && styles.editableInput]}
          value={budget}
          keyboardType="numeric"
          onChangeText={setBudget}
          editable={isBudgetEditable}
        />
        <TouchableOpacity onPress={() => setIsBudgetEditable(!isBudgetEditable)}>
          <Feather name="edit" size={24} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Color: </Text>
        <TouchableOpacity onPress={() => setColorModalVisible(true)}>
          <View style={[styles.colorBox, { backgroundColor: color }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsColorEditable(!isColorEditable)}>
          <Feather name="edit" size={24} color={Colors.WHITE} />
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
    backgroundColor: Colors.BLACK,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  input: {
    flex: 1,
    color: Colors.WHITE,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
  },
  editableInput: {
    backgroundColor: Colors.GRAY,
  },
  colorBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 10,
  },
  updateButton: {
    backgroundColor: Colors.GREEN,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: Colors.RED,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  deleteButtonText: {
    color: Colors.WHITE,
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
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: Colors.GRAY,
    padding: 10,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: Colors.BLACK,
  },
});
