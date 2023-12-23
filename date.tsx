import React, {useState} from "react";
import {View, SafeAreaView, Button, Text} from 'react-native';

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export const PickDate = () => {
    const [date, setDate] = useState(new Date(1598051730000));
  
    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };
  
    const showMode = (currentMode: any) => {
    //   DateTimePickerAndroid.open({
    DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <SafeAreaView>
        <Text>selected: {date.toLocaleDateString()}</Text>
        <Button onPress={showDatepicker} title="Show date picker!" />
        {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
      </SafeAreaView>
    );
  };