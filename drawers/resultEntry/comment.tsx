import React, {useContext} from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Alert } from "react-native";
import MyTextInput from "../../unitParts/reuseTextInput";
import { isInputValid } from "../../unitParts/errFunc";
import { useState } from "react";
import { StudentContext } from "../../context/studContext";

export default function CommentPart(this: any) {
    const studentData = useContext(StudentContext);
    const [inputText, setInputText] = useState('')

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
        setInputText('')
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
    
    return (
        <SafeAreaView>
            <View style={styles.commentPart}>
                <Text>Teacher's or Principal's Comment</Text>
               <MyTextInput 
                    label="Enter Comment" 
                    inputErr={undefined} 
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
                    marginTop:160,
                }}>
                <Button 
                    title="Submit"
                    onPress={submitForm}
                    disabled={errForRegInput}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    commentPart: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,  
    }
})