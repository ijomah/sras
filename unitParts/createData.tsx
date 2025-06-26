import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [items, setItems] = useState([]); // State to hold the list items
  const [newItemText, setNewItemText] = useState(''); // State to hold the text for the new item

  const addItem = () => {
    if (newItemText.trim() !== '') { // Ensure the text is not empty
      setItems([...items, { id: Date.now().toString(), text: newItemText }]); // Add new item to the array
      setNewItemText(''); // Clear the input field
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new item"
          value={newItemText}
          onChangeText={setNewItemText}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});