import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, TextInputComponent, TextInput, Button } from 'react-native';


function LoginPage({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

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
    return (
        <View style={styles.loginBox}>
            <View style={styles.loginForm}>
                <Text style={styles.loginHeadTxt}>
                    Login Form
                    {/* <FontAwesomeIcon 
                        icon="fa-solid fa-right-to-bracket" 
                        size={20}
                        style={styles.loginIcon}
                    /> */}
                </Text>
                <View style={styles.loginEmail}>
                    <Text style={styles.loginTxt}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="joe@mail.com"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={handleChangeEmail} 
                        //autoComplete=""
                        cursorColor='#FFEDD6'
                    />
                </View>
                <View style={styles.loginPassword}>
                    <Text style={styles.loginTxt}>Password:</Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={showPassword}
                            value={password}
                            autoCapitalize="none"
                            keyboardType="visible-password"
                            onChangeText={handleChangePassword}
                            cursorColor='#FFEDD6'
                        />
                        {/* bring eye icon and blind icon with conditional */}
                    </View>
                </View>
                <View style={styles.loginBtn}>
                    <TouchableOpacity>
                        {/* <Link href=''> */}
                        <Button 
                            title="Submit"
                            color='#5CBFAB'
                            onPress={handleSignin}
                        />
                        {/* </Link> */}
                        {/* <Text style={styles.loginSubmitTxt}>Submit</Text> */}
                    </TouchableOpacity>
                    
                </View>
                <View>
                <TouchableOpacity
                    // onPress={()=>navigation.navigate('auth/manReg')}
                >
                        {/* <Link href=''> */}
                        {/* <Button 
                            title="Register"
                            color='#5CBFAB'
                            onPress={handleSignin}
                        /> */}
                        {/* </Link> */}
                        {/* <Text style={styles.loginSubmitTxt}>Submit</Text> */}
                        <Text>Register</Text>
                    </TouchableOpacity>
                    {/* <Link href='./regForm'> */}
                        
                    {/* </Link> */}
                </View>
                <View>
                    <Text>Forgot Password!</Text>
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
        // backgroundColor: '#B7E0F7',
        width: '80%',
        borderColor: '#5CBFAB',
        borderWidth: 4,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    loginEmail: {
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