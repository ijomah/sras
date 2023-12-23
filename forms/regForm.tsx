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
                    >Registration Form</Text>
                <View style={styles.appliNo}>
                    <MyTextInput 
                        label="First Name:"
                        inputErr={errInData.fname}
                        inputConfig={{
                            placeholder:"First Name",
                            onChangeText: setReg.bind(this, 'fName')
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    <MyTextInput 
                        label="Last Name:" 
                        inputErr={errInData.lname}
                        inputConfig={{
                            placeholder:"Last Name",
                            onChangeText:setReg.bind(this, 'lName')
                        }}
                    />
                </View>

                <View style={styles.appliName}>
                    <MyTextInput 
                        label="Middle Name:" 
                        inputErr={errInData.lname}
                        inputConfig={{
                            placeholder:"Middle Name",
                            onChangeText:setReg.bind(this, 'mName')
                        }}
                    />
                </View>

                <View style={styles.appliName}>
                    <MyTextInput 
                        label="email:" 
                        inputErr={errInData.lname}
                        inputConfig={{
                            placeholder:"email",
                            onChangeText:setReg.bind(this, 'email')
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    <MyTextInput 
                        label="password:" 
                        inputErr={errInData.lname}
                        inputConfig={{
                            placeholder:"password",
                            onChangeText:setReg.bind(this, 'password')
                        }}
                    />
                </View>

                <View 
                    // style={styles.appliName}
                    >
                        <MyTextInput 
                            label= 'Date of Birth:'
                            inputErr={errInData.fileYear}
                            // style={styles.input}
                            inputConfig={{
                                placeholder:"Date of Birth:",
                                value: date.toLocaleDateString(),
                                onChangeText: setReg.bind(this, 'dob')
                            }}
                        />
                        {changer?
                        <TouchableOpacity 
                            style={{height:23, marginBottom:3, alignSelf:'flex-end', alignItems:'center', width:100, backgroundColor:'#5CBFAB'}} 
                            onPress={()=>{
                                setReg('dob', date.toLocaleDateString())
                                onShowDate()
                                
                            }}
                            >
                            <Text>Pick date</Text>
                            <Text>Submit!!</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity 
                            style={{height:23, marginBottom:3, alignSelf:'flex-end', alignItems:'center', width:100, backgroundColor:'#5CBFAB'}} 
                            onPress={()=>{
                                setReg('dob', date.toLocaleDateString())
                                onShowDate()
                                
                            }}
                            >
                            <Text>Pick date</Text>
                            <Text>Submit!!</Text>
                        </TouchableOpacity>
                        }
                    </View>

                <View 
                // style={styles.phoneNumber}
                >
                    <MyTextInput 
                        label="Phone Number:"
                        inputErr={errInData.phoneNo} 
                        inputConfig={{
                            placeholder:"Phone Nunmber:",
                            keyboardType:"phone-pad",
                            onChangeText:setReg.bind(this, 'phoneNo')
                        }}
                    />
                </View>

                <View 
                // style={styles.phoneNumber}
                >
                    <MyTextInput 
                        label="Phone Number Type:"
                        inputErr={errInData.phoneNo} 
                        inputConfig={{
                            placeholder:"Home or Office Phone Number:",
                            // keyboardType:"text",
                            onChangeText:setReg.bind(this, 'phoneNoType')
                        }}
                    />
                </View>

                <View>
                    <View 
                    // style={styles.houseNumber}
                    >
                        <MyTextInput 
                            // style={styles.houseInput}
                            label="House Number:"
                            inputErr={errInData.houseNo}
                            inputConfig={{
                                placeholder:"House Number:",
                                keyboardType:"numeric",
                                onChangeText:setReg.bind(this, 'houseNo')
                            }}
                        />
                    </View>

                    <View 
                    // style={styles.streetName}
                    >
                        <MyTextInput 
                            label="Street Name:"
                            inputErr={errInData.streetName}
                            // keyboardType="default"
                            // style={styles.StreetInput}
                            inputConfig={{
                                placeholder:"Street Name:",
                                onChangeText:setReg.bind(this, 'street')
                            }}
                        />
                    </View>

                    <View 
                    // style={styles.areaName}
                    >
                        <MyTextInput 
                            label="Area Name:"
                            inputErr={errInData.areaName}
                            // style={styles.areaInput}
                            inputConfig={{
                                placeholder:"Area Name:",
                                keyboardType:"default",
                                onChangeText:setReg.bind(this, 'area')
                            }}
                        />
                    </View>

                    <View 
                    // style={styles.areaName}
                    >
                        <MyTextInput 
                            label="Quarter:"
                            inputErr={errInData.areaName}
                            // style={styles.areaInput}
                            inputConfig={{
                                placeholder:"Quarters:",
                                keyboardType:"default",
                                onChangeText:setReg.bind(this, 'quarter')
                            }}
                        />
                    </View>

                    <View 
                    // style={styles.areaName}
                    >
                        <MyTextInput 
                            label="Zone Name:"
                            inputErr={errInData.areaName}
                            // style={styles.areaInput}
                            inputConfig={{
                                placeholder:"Zone:",
                                keyboardType:"default",
                                onChangeText:setReg.bind(this, 'zone')
                            }}
                        />
                    </View>

                    <View 
                    // style={styles.areaName}
                    >
                        <MyTextInput 
                            label="Local Govt Area:"
                            inputErr={errInData.areaName}
                            // style={styles.areaInput}
                            inputConfig={{
                                placeholder:"LGA:",
                                keyboardType:"default",
                                onChangeText:setReg.bind(this, 'lga')
                            }}
                        />
                    </View>

                    <View 
                    // style={styles.state}
                    >
                        <MyTextInput 
                            label="State:"
                            inputErr={errInData.state}
                            // style={styles.stateInput}
                            inputConfig={{
                                placeholder:"State:",
                                keyboardType:"default",
                                onChangeText:setReg.bind(this, 'state')
                            }}
                        />
                    </View>

                    <View 
                    // style={styles.country}
                    >
                        <MyTextInput 
                            label="Country:"
                            inputErr={errInData.country}
                            // style={styles.countryInput}
                            inputConfig={{
                                placeholder:"Country:",
                                onChangeText:setReg.bind(this, 'country')
                            }}
                        />
                    </View>

                    <View 
                    // style={styles.countryCode}
                    >
                        <MyTextInput 
                            label="Zip Code:"
                            inputErr={errInData.countryCode}
                            // style={styles.countryCodeInput}
                            inputConfig={{
                                placeholder:"Zip Code:",
                                keyboardType:"number-pad",
                                onChangeText:setReg.bind(this, 'zipCode')
                            }}
                        />
                    </View>
                </View>
                
                
                    <View 
                    // style={styles.appliName}
                    >
                        <MyTextInput 
                            label= 'Date of Registration:'
                            inputErr={errInData.fileYear}
                            // style={styles.input}
                            style={{width:50}}
                            inputConfig={{
                                placeholder:"File Year:",
                                value: date.toLocaleDateString(),
                                onChangeText: setReg.bind(this, 'fileYear')
                            }}
                        />                        
                        <TouchableOpacity style={{height:23, marginBottom:3, alignSelf:'flex-end', alignItems:'center', width:100, backgroundColor:'#5CBFAB'}} onPress={onShowDate}>
                            <Text>Date picker!</Text>
                        </TouchableOpacity>
                    </View>
                {/* Ability to add additional input field by the user
                Use a fontawesome icon to give the use this ability */}
                <View>
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