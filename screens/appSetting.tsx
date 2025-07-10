import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { getDocumentInfo } from '../api/genApi';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [offlineModeEnabled, setOfflineModeEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => console.log("User logged out") }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>App Settings</Text>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account</Text>
        {/* <TouchableOpacity style={styles.settingItem} onPress={() => console.log('call auth server')}>
          <Text style={styles.settingText}>Google Drive</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.settingItem} onPress={() => getDocumentInfo('')}>
          <Text style={styles.settingText}>Google Sheet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Edit profile pressed')}>
          <Text style={styles.settingText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Change password pressed')}>
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* General Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>General</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch
            onValueChange={setNotificationsEnabled}
            value={notificationsEnabled}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            onValueChange={setDarkModeEnabled}
            value={darkModeEnabled}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Offline Mode</Text>
          <Switch
            onValueChange={setOfflineModeEnabled}
            value={offlineModeEnabled}
          />
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>About</Text>
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Privacy Policy pressed')}>
          <Text style={styles.settingText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Terms of Service pressed')}>
          <Text style={styles.settingText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('App version pressed')}>
          <Text style={styles.settingText}>App Version: 1.0.0</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;