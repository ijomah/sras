import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './screens/home';
import LoginPage from './screens/login';
import Dashboard from './screens/dashboard';
import StudentList from './screens/studentList';
import SchoolHead from './screens/schHeads';
import ResultViewer from './screens/resultViewer';
import ManageRegForm from './forms/manageRegForm';


import ResultEditDrawer from './drawerScreen/drawer';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='home' component={HomePage} />
        <Screen name='login' component={LoginPage} />
        <Screen name='dash' component={Dashboard} />
        <Screen name='studListForRes' component={StudentList} />
        <Screen name='studList' component={StudentList} />
        <Screen name='admin' component={SchoolHead} />
        <Screen name='resultView' component={ResultViewer} />
        <Screen name='studentReg' component={ManageRegForm} />
        
        <Screen name='drawer' 
          component={ResultEditDrawer}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
