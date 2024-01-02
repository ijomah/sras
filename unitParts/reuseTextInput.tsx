import React, { useRef } from "react";
import { View, StyleSheet, Text, SafeAreaView, Button, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const MyTextInput = ({label, inputErr, inputConfig}: any) => {
    // console.log('from custom input', inputErr)
// const input = useRef(null)
let textInput: any
    return (
        // <View>
        //     <Text>{label}</Text>
        //     <TextInput style={styles.input} {...inputConfig} />
        // </View>
        <SafeAreaView style={{flex: 0.0001, flexDirection:'row'}}>
            <View style={[ inputConfig.multiline? styles.multinputBox: styles.inputContainer ]}>
                        <Text style={styles.inputLabel}>{label}</Text>
                        <TextInput {...inputConfig}
                            style={[ inputConfig.multiline? styles.multinput: styles.input ]}
                            // placeholder="joe@mail.com"
                            ref={input => {textInput = input}}
                            onSubmitEditing={() => textInput.clear()}
                            // value={email}
                            // onChangeText={handleChangeEmail} 
                            // //autoComplete=""
                            // cursorColor='#FFEDD6'
                        />
                    </View>
                    
                    {inputErr? '' :
                        <TouchableOpacity style={{justifyContent: 'center',}}>
                            {/* {inputErr ||  */}
                                <MaterialIcons 
                                    name="error-outline" 
                                    size={22} 
                                    color="red" 
                                    style={{marginTop: 20}}
                                />   
                            {/* } */}
                            {/* {!inputErr &&
                                <MaterialCommunityIcons 
                                    name="checkbox-marked-circle-outline" 
                                    size={32} 
                                    color="#5CBFAB"
                                    style={{marginTop: 20}}
                                />
                                } */}
                        </TouchableOpacity>
                    }
        </SafeAreaView>
    )
}

export default MyTextInput;

// const styles = StyleSheet.create({
//     input: {
//         borderWidth: 3,
//         borderColor: '#5CBFAB',
//         height: 45,
//         borderRadius: 10,
//         padding: 15
//     },
// })

const styles = StyleSheet.create({
    loginBox:  {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginForm: {
        // backgroundColor: '#B7E0F7',
        width: '80%',
        borderColor: '#5CBFAB',
        borderWidth: 4,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    inputContainer: {
        width: 250,
        height: 75
    },
    loginPassword: {
        width: 250,
        height: 75,
        margin: 5,
        
    },
    input: {
        borderWidth: 3,
        // borderColor: '#FFEDD6',
        borderColor: '#5CBFAB',
        height: 45,
        borderRadius: 10,
        padding: 15
    },
    multinput: {
        borderWidth: 3,
        // borderColor: '#FFEDD6',
        borderColor: '#5CBFAB',
        height: 120,
        borderRadius: 10,
        padding: 15,
        width: '100%',
    },
    multinputBox:{
        width: 300,
        height: 75
    },
    inputLabel: {
        fontSize: 20,
    },
    loginHeadTxt: {
        fontSize: 30,
        height: 60
    },
    loginSubmitTxt: {
        fontSize: 20,
        textAlign: 'center'
    },
    loginBtn: {
        // borderWidth: 3,
        // borderColor: '#FFEDD6',
        width: '100%',
        borderRadius: 10,
        margin: 5,
        height: 50

    },
    loginIcon: {
        
    }
})