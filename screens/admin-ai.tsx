import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Clipboard from '@react-native-clipboard/clipboard';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  // State for the first dropdown
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: 'Option 1A', value: 'Option 1A' },
    { label: 'Option 1B', value: 'Option 1B' },
    { label: 'Option 1C', value: 'Option 1C' },
  ]);

  // State for the second dropdown
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Option 2A', value: 'Option 2A' },
    { label: 'Option 2B', value: 'Option 2B' },
    { label: 'Option 2C', value: 'Option 2C' },
  ]);

  const handleButtonPress = (buttonName: string) => {
    Alert.alert('Button Pressed', `You pressed: ${buttonName}`);
  };

  const handleCopy = () => {
    if (value1 && value2) {
      const textToCopy = `Dropdown 1: ${value1}\nDropdown 2: ${value2}`;
      Clipboard.setString(textToCopy);
      Alert.alert('Copied!', 'Dropdown values copied to clipboard.');
    } else {
      Alert.alert('Nothing to copy', 'Please select options from both dropdowns.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UI Example</Text>

      {/* Dropdown 1 */}
      <DropDownPicker
        open={open1}
        value={value1}
        items={items1}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems1}
        style={styles.dropdown}
        placeholder="Select Option 1"
        containerStyle={styles.dropdownContainer}
        zIndex={3000}
        zIndexInverse={1000}
      />

      {/* Dropdown 2 */}
      <DropDownPicker
        open={open2}
        value={value2}
        items={items2}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems2}
        style={styles.dropdown}
        placeholder="Select Option 2"
        containerStyle={styles.dropdownContainer}
        zIndex={2000}
        zIndexInverse={2000}
      />

      {/* Copy Icon */}
      <TouchableOpacity onPress={handleCopy} style={styles.copyIcon}>
        <Ionicons name="copy-outline" size={24} color="#007bff" />
      </TouchableOpacity>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Button 1')}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Button 2')}
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Button 3')}
        >
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdown: {
    borderColor: '#ccc',
  },
  copyIcon: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
