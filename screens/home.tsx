import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
// import { readData, readApprAndApplicTable } from "../util/dbService";

import { Dropdown } from 'react-native-element-dropdown';

import AntDesign from '@expo/vector-icons/AntDesign';

import { schList } from "../data";



const HomePage = ({navigation}: any) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');
    // let isScannerBtn = false
    const handleSubmit = () => {
        console.log('Login submitted');
    }

    const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Dropdown label
            </Text>
          );
        }
        return null;
      };
    
    return (
        <View>
            <View style={styles.home}>                
                <View style={styles.vendorLogoContainer}>
                   <Image
                        style={styles.vendorLogo} 
                        source={require('./../assets/laptopchild.jpeg')} 
                    />
                
                <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={schList}
                search
                maxHeight={300}
                labelField="name"
                valueField="name"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                  navigation.navigate('login')
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        height: 780,
        width: 410,
        borderColor: '#B7E0F7',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center'
        //backgroundColor: '#F7DBB6',
        //opacity: 0.5
    },
    vendorLogo: {
        height: 250,
        width: 250,
        alignSelf: 'center',
        // marginTop: 300,
        // marginTop: '25%',
        // marginLeft: 80,
        // marginLeft: '20%',
        borderRadius: 20
    },

    vendorLogoContainer: {
        //backgroundColor: '#5CBFAB',
        // height: 100
    },
    navLink: {
        backgroundColor: '#B7E0F7',
        width: 90,
        alignItems: 'center',
        alignSelf: 'center',
        // height: 500
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFEDD6',
        padding: 2,
    },
    archivaLogo: {
        height: 100,
        width: 100,
        marginLeft: 300,
        marginTop: 116,
        borderWidth: 3,
        borderColor: 'skyblue',
        borderRadius: 20
    },


    //dropdown
        container: {
          backgroundColor: 'white',
          padding: 16,
        },
        dropdown: {
          height: 50,
          borderColor: 'gray',
          borderWidth: 0.5,
          borderRadius: 8,
          paddingHorizontal: 8,
        },
        icon: {
          marginRight: 5,
        },
        label: {
          position: 'absolute',
          backgroundColor: 'white',
          left: 22,
          top: 8,
          zIndex: 999,
          paddingHorizontal: 8,
          fontSize: 14,
        },
        placeholderStyle: {
          fontSize: 16,
        },
        selectedTextStyle: {
          fontSize: 16,
        },
        iconStyle: {
          width: 20,
          height: 20,
        },
        inputSearchStyle: {
          height: 40,
          fontSize: 16,
        },
    
})

export default HomePage