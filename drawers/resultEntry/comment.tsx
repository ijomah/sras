import React, {useContext,useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,Button, Alert, TouchableHighlight, FlatList } from "react-native";

import * as Clipboard from 'expo-clipboard';


import FontAwesome from '@expo/vector-icons/FontAwesome';

import MyTextInput from "../../unitParts/reuseTextInput";
import { isInputValid } from "../../unitParts/errFunc";

import { StudentContext } from "../../context/studContext";
import { getDocumentInfo } from "../../api/genApi";


export default function CommentPart(this: any,editObj:any) {
    const studentData = useContext(StudentContext);
    const [inputText, setInputText] = useState()
    const [apiComments, setapiComments] = useState('');
    const [showIf, setShowIf] = useState(false);

    const [userForm, setUserForm] = useState({
        id: studentData.id,
        name: studentData.name,
        teacherId: studentData.teacherId,
        // label: '',
        // value: '',
    })
    const [errForRegInput, setErrForRegInput] = useState(true);

    // const dispatch = useDispatch();
    // const navigation = useNavigation();


    const setReg = (valIdentifier: any, typedVal: any) => {
        // console.log('identifier-val', valIdentifier, typedVal)
        setUserForm({...userForm, [valIdentifier]: typedVal}) 
        console.log('state part', userForm)
        setErrForRegInput(false)
        
    }

    const submitForm = async () => {
        // console.log('params id', route.params)  
        // await storeData(userForm);
        // if(!isInputValid(userForm).isErr) {

        //     return setErrForRegInput(isInputValid(userForm).errObj);
        //  }
        //  '/api/v1/register'
        // saveData(userForm);
        // setInputText()
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

             //save api-data to state variable
        setUserForm(editObj)
    }
    
   const getComment = () => {
    //api call
    const data = getDocumentInfo('');
    !!data? setShowIf(true):''; 

   }
    
    //copyToClipboard

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(apiComments);
  };

  const fetchapiComments = async () => {
    const text = await Clipboard.getStringAsync();
    // setInputText(text);
  };

   const showComments = () => {
        {/* copyToClipboard */}
        return(
            <>
            {showIf &&   <View style={{flexDirection:'row'}}>
                    <Text style={styles.apiComments}>{apiComments}</Text>
                    <TouchableHighlight onPress={copyToClipboard}>
                        <FontAwesome name="copy" size={24} color="black" />
                    </TouchableHighlight>
                </View>}
            </>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.commentPix}>
                <Image 
                    style={{width:100, height:100, borderRadius:10   }}
                    source={require('./../../assets/avarter.jpg')}
                />
                <Text>{'StudentName'}</Text>
                <Text>{'studentAverge'}</Text>
            </View>
            <View style={styles.commentPart}>
                <View style={{flexDirection:'row'}}>
                    <Text>Teacher's or Principal's Comment</Text>
                    {showIf && <TouchableHighlight onPress={fetchapiComments}>
                        <FontAwesome name="paste" size={24} color="black" />
                    </TouchableHighlight>}
                </View>
               <MyTextInput 
                    label="Enter Comment" 
                    inputErr={errForRegInput} 
                    inputConfig={{
                        multiline: true,
                        textAlignVertical: 'top',
                        numberOfLines: 6,
                        rows: 6,
                        keyboardType:"default",
                        value: inputText,
                        onChangeText:setReg.bind(this, 'comment')
                    }} 
              />
            </View>
            <View 
                style={{                
                    alignSelf: 'center',
                    width:300,
                    marginTop:160,
                }}>
                <Button 
                    // title={editObj? "Save Changes":"Submit"}
                    title={"Submit"}
                    onPress={submitForm}
                    disabled={errForRegInput}
                />
            </View>

   
            <FlatList data={[{}]} renderItem={showComments}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    commentPart: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,  
    },
    commentPix:{
        alignItems:'center',
        justifyContent:'center',
    },
    apiComments: {
    marginTop: 10,
    color: 'red',
  },

})