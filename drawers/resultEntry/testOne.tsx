import React, {useContext, useState} from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Text, View, Button, Alert } from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import { AntDesign } from '@expo/vector-icons';

import { docTypeArr } from "../../data";
import MyTextInput from "../../unitParts/reuseTextInput";
import { isInputValid } from "../../unitParts/errFunc";
import { StudentContext } from "../../context/studContext";
const FirstTestScore = ({route}: any) => {
    const [selected, setSelected] = useState([]);
    const studentData = useContext(StudentContext);
   
    const [userForm, setUserForm] = useState({
        id: studentData.id,
        name: studentData.name
        // label: '',
        // value: '',
    })
    const [errForRegInput, setErrForRegInput] = useState({});

    // const dispatch = useDispatch();
    // const navigation = useNavigation();

    const setReg = (valIdentifier: any, typedVal: any) => {
        // console.log('identifier-val', valIdentifier, typedVal)
        setUserForm({...userForm, [valIdentifier]: typedVal})
        console.log('state part', userForm)
        console.log('param\'s id', route.params)  
    }

    const submitForm = async () => {
        // await storeData(userForm);
        if(!isInputValid(userForm).isErr) {

            return setErrForRegInput(isInputValid(userForm).errObj);
         }
        //  '/api/v1/register'
        // saveData(userForm);
        // axios.post(BACKEND_URL+'/api/v1/register',
        //     userForm
        // ).then((postRes) => {
        //     storeData({...postRes.data[0], date: new Date().toISOString()})
        // })
        // .catch((error) => {
        //     console.log('axios post regErr', error);
        // })
        // dispatch(addRegFormTo(userForm));

        Alert.alert(
            'Form', 
            'Form Submitted!',
            [{  
                text: 'Ok',
                // onPress: () => navigation.navigate('login')
            }]
            )

            // readUserTable().then((dat) => {
            //     console.log('Checking local db id', dat);
            //    let phoneDbId = dat.rows._array[0].dbUser_id
            // console.log('phoneDbId', phoneDbId)
            // })
    }
    
    const renderItem = (item: { label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
        
      return (
            <View style={styles.item}>
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
                {/* <FontAwesomeIcon 
                    icon="fa-regular fa-id-card"
                    color="skyblue" 
                    size={15}
                /> */}
                {/* <AntDesign name="delete" size={15} color="Skyblue" /> */}
            </View>
        );
    };
    
    return (

        <SafeAreaView>
            <ScrollView>
            <MultiSelect 
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={docTypeArr}
                labelField="label"
                //label on valuefield was value b4. i changed to label
                valueField="label"
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
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <AntDesign name="delete" size={15} color="steelblue" />
                        </View>
                        
                    </TouchableOpacity>
                )}
            />
            </ScrollView>
            <View style={{
                marginTop:10, 
                backgroundColor:'red',
                alignItems: 'center'    
            }}>
                <MyTextInput 
                    label="Enter First Test Score" 
                    inputErr={undefined} 
                    inputConfig={{
                        multiline: false,
                        textAlignVertical: 'top',
                        numberOfLines: 6,
                        maxLength: 2,
                        keyboardType:'number-pad',
                        onChangeText:setReg.bind(this, 'test1')
                    }} 
                />
            </View>
            <View 
                style={{
                    marginTop:78,
                }}>
                <Button 
                    title="Submit"
                    onPress={()=>{}}
                />
            </View>
        </SafeAreaView>
    )
}

export default FirstTestScore;

const styles = StyleSheet.create({
    dropdownPages: {
      flex: 1,
      backgroundColor: 'transparent',
      color: 'blue',
      justifyContent: 'center',
      
    },  
    // container: { 
    //     padding: 16,
    //    },
      dropdown: {
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
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 14,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
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