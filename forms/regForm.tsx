import React, { useState } from "react";
import {ScrollView, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';

import MyTextInput from "../unitParts/reuseTextInput";
import { PickDate } from "../date";

const RegForm = ({onShowDate, date, setReg, submitForm, errInData}: any) => {
    const [changer, setChanger] = useState(false);
    return (
        <SafeAreaView 
        // style={{conentContainerStyle: {justifyContent: 'center'}}}
        >
        <ScrollView>
            <View style={styles.formPage}>
                <Text  
                    // style={{
                    //     fontSize: 20, 
                    //     fontWeight:500, 
                    //     marginBottom: 20
                    //     }}
                    >Attendance Form</Text>
                <View style={styles.appliNo}>
                    <MyTextInput 
                        label="Student's Attendance:"
                        inputErr={errInData.fname}
                        inputConfig={{
                            placeholder:"No of Times present:",
                            keyboardType:"numeric",
                            onChangeText: setReg.bind(this, 'stupresent')
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    <MyTextInput 
                        label="No of Times School Opened:" 
                        inputErr={errInData.lname}
                        inputConfig={{
                            placeholder:"Operational School Days:",
                            keyboardType:"numeric",
                            onChangeText:setReg.bind(this, 'daysopen')
                        }}
                    />
                </View>
                <View style={{marginTop:30}}>
                    <Button 
                        onPress={submitForm}
                        title="Submit"
                        color='#5CBFAB'
                    />
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default RegForm

const styles = StyleSheet.create({
    formPage: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        // backgroundColor: 'red'
        
    },
    appliNo: {

    },
    input: {

    },
    appliName: {

    },
    // applicationNo: {

    // }
})