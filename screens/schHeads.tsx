import React, { useState } from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

import { studentList } from '../data';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const SchoolHead = () => {
    // const [value, setValue] = useState(null);
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState([]);
    const [isFocus, setIsFocus] = useState(false);

    const listStudents = () => {
      //
      //Also goto studentlist comp
  }

  // api call to get class list
  const listClasses = () => {
      //
  }

  const renderItem = (item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.selectedTextStyle}>{item.name}</Text>
            {/* <AntDesign name="delete" size={15} color="Skyblue" /> */}
        </View>
    );
  };
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
      <>
      <SafeAreaView>
            <View>
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
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
                {/* dropdown is needed here */}
                <Button 
                    title="Classes list"
                    onPress={listClasses}
                />
            </View>
                {/* dropdown is needed here */}
            <ScrollView>
              <MultiSelect 
                    style={styles.dropdownM}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={studentList}
                    labelField="name"
                    //label on valuefield was value b4. i changed to label
                    valueField="value"
                    placeholder="Select item"
                    value={selected}
                    activeColor="#F7DBB6"
                    search
                    searchPlaceholder="Search..."
                    onChange={(item: any) => {
                        setSelected(item);
                    }}
                    renderLeftIcon={() => ( 
                        // <FontAwesomeIcon 
                        //     icon="fa-regular fa-id-card"
                        //     color="steelblue" 
                        //     size={20}
                        // />
                        <></>
                    )}
                    onChangeText={(datum: any) => console.log("onchangeTxt:", datum) }
                    onConfirmSelectItem={(datum: any) => console.log("onConfirmSelect", datum)}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unselect) => (
                        <TouchableOpacity onPress={
                          () => unselect && unselect(item)
                        }>
                            <View style={styles.selectedStyle}>
                                <Text style={styles.textSelectedStyle}>{item.name}</Text>
                                <AntDesign name="delete" size={15} color="steelblue" />
                            </View>
                            
                        </TouchableOpacity>
                    )}
                />  
            </ScrollView>
                <Button 
                    title="Students list"
                    onPress={listStudents}
                />
        </SafeAreaView>
      
      </>
    );
  };

  export default SchoolHead;

  const styles = StyleSheet.create({
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


    // multi drop style
    dropdownPages: {
      flex: 1,
      backgroundColor: 'transparent',
      color: 'blue',
      justifyContent: 'center',
      
    },  
    
    dropdownM: {
        height: 50,
        width: 410,
        backgroundColor: '#B7E0F7',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
      docsTitle: {
        padding: 5,    
    },
      inputDocsTitle: {
        padding: 5,
        borderColor: 'transparent',
        width: 400,
        color: 'black'
    },
      // space: {
      //   // width: 5,
      //   //height: 200
      // },
      inputSelect: {
        position: "relative",
        // zIndex: 0,
        // top: 605
        marginBottom: 5
      },
      docsTitleTextInput: {
        borderColor: '#5C8FAB',
        borderWidth: 3,
        height: 50,
        backgroundColor: '#B7E0F7',
        fontSize: 16,
        borderRadius: 10,
        padding: 5
    },
      // placeholderStyle: {
      //   fontSize: 16,
      // },
      // selectedTextStyle: {
      //   fontSize: 14,
      // },
    // iconStyle: {
    //     width: 20,
    //     height: 20,
    //   },
      // inputSearchStyle: {
      //   height: 40,
      //   fontSize: 16,
      // },
      // icon: {
      //   marginRight: 5,
      // },
      item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
        borderColor: '#5C8FAB',
        borderWidth: 2
      },
      textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
      },
  });