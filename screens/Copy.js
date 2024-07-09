import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Clipboard } from 'react-native';
import { supabase } from '../SupabaseConfig';
import Colors from '../assets/Colors';

const CopyExpenses = ({ categoryList }) => {

  const handleCopyDetails = async () => {
    try {
      // Assuming categoryList is an array of category IDs or something similar
      const promises = categoryList.map(categoryId =>
        supabase
          .from('Category')
          .select('name, budget')
          .eq('category_id', categoryId)
          .single()
      );

      const results = await Promise.all(promises);

      if (results.length === 0) {
        Alert.alert('Error', 'No expenses found');
        return;
      }

      const expenseDetails = results.map(result => `${result.name}: ${result.budget}`).join('\n');
      const totalAmount = results.reduce((sum, result) => sum + result.budget, 0);
      const copyText = `${expenseDetails}\nTotal: ${totalAmount}`;
      Clipboard.setString(copyText);
      Alert.alert('Copied to Clipboard', copyText);
    } catch (error) {
      console.error('Error copying expenses:', error.message);
      Alert.alert('Error', 'Failed to fetch expenses');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.copyButton} onPress={handleCopyDetails}>
        <Text style={styles.copyButtonText}>Copy Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  copyButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  copyButtonText: {
    color: Colors.WHITE,
    fontSize: 16,
  },
});

export default CopyExpenses;
