import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, TextInputComponent, TextInput, Button } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function LoginPage({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hideShow, setHideShow] = useState(true);

    const handleChangeEmail = (typedEmail: any) => {
        setEmail(typedEmail)
    }

    const handleChangePassword = (typedPass: any) => {
        setPassword(typedPass)
    }

    const handleSignin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email || !password) {
            //Show alert 'enter an email or password            
            return Alert.alert(
                'Sign In Needed',
                'Enter your credentials',
                [{text: 'Ok'}]
            )
        } else if(password === 'admin') {
            // console.log('Login submitted');
            navigation.navigate('dash');
        }    
    }

    const toggleShowPassword = () => { 
        setHideShow(!hideShow); 
    }; 
    return (
        <View style={styles.loginBox}>
        <View style={styles.loginForm}>
            <Text style={styles.loginHeadTxt}>
                Login {' '}
                <Entypo name="login" size={24} color="black" />
            </Text>
            <View style={styles.loginEmail}>
                <Text style={styles.loginTxt}>Phone Number:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="8123456789"
                    value={email}
                    keyboardType="phone-pad"
                    onChangeText={handleChangeEmail} 
                    autoCapitalize="none"
                    cursorColor='#FFEDD6'
                />
            </View>
            <View style={styles.loginPassword}>
                <Text style={styles.loginTxt}>Password:</Text>
                <View style={styles.iconInput}>
                    <TextInput
                        style={{width: '80%', height: 25, fontSize: 17,}}
                        placeholder="Password"
                        value={password}
                        onChangeText={handleChangePassword}
                        cursorColor='#FFEDD6'
                        secureTextEntry= {hideShow}
                        autoCapitalize="none"
                    />
                    <Ionicons name={hideShow? "eye" : "eye-off"} size={24} onPress={toggleShowPassword} color="#DB6D32" />
                </View>
            </View>
            <View 
                style={styles.loginFormBtns}
            >
                <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={handleSignin}
                >
                    <Text 
                        style={styles.loginText}
                    >Submit </Text>
                        
                </TouchableOpacity >
                
            
                <TouchableOpacity
                    style={styles.loginBtn}
                    // onPress={()=>myNavigator.navigate('auth/manReg')}
                >
                    <Text 
                        style={styles.loginTextForgot}
                    >Forgot Password!</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    // style={{marginTop: 15}}
                    style={styles.loginBtn}
                    // onPress={()=>navigation.navigate('auth/manReg')}
                >
                    <Text
                        style={styles.loginText}
                    >Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}


export default LoginPage;

const styles = StyleSheet.create({
    loginBox:  {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginForm: {
        // backgroundColor: '#56DB32',
        width: '100%',
        borderColor: '#DB6D32', //gold
        borderWidth: 1,
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80
    },
    loginFormBtns: {
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '60%',
    },
    loginEmail: {
        width: '80%',
        height: '17%',
        marginBottom: 10,
    },
    loginPassword: {
        width: '80%',
        height: '17%',
        margin: 5,
        marginBottom: '3%'
        
    },
    iconInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#DB6D32',
        backgroundColor: '#56DB32',
        borderWidth: 1,
        height: 57,
        borderRadius: 30,
        padding: 15,
        // marginBottom: 10,
    },
    input: {
        fontSize: 17,
        borderColor: '#DB6D32',   //gold
        backgroundColor: '#56DB32',  //green
        borderWidth: 1,
        height: 57,
        borderRadius: 30,
        padding: 15,
        
    },
    loginTxt: {
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
        borderWidth: 1,
        borderColor: '#DB6D32',
        backgroundColor: '#56DB32',
        width: '80%',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        height: 40,
        justifyContent: 'center',

    },
    loginText: {
        fontSize: 16,
        alignSelf: 'center',
        width: '40%',
        // backgroundColor: 'red',
    },
    loginTextForgot: {
        fontSize: 16,
        alignSelf: 'center',
        width: '75%',
        // backgroundColor: 'red',
    }
})