// const deleteFxn = (arr: any[], st: any, no: number) => arr.splice(st, no)

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Item A' },
    { id: '2', name: 'Item B' },
    { id: '3', name: 'Item C' },
  ]);

  const handleDeleteItem = (itemId) => {
    // Create a new array excluding the item with the given ID
    const updatedItems = items.filter(item => item.id !== itemId);
    // Update the state with the new array
    setItems(updatedItems);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <TouchableOpacity onPress={() => handleDeleteItem(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;