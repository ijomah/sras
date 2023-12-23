import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, TextInput, Button, ToastAndroid, GestureResponderEvent } from 'react-native';
import { MultiSelect, Dropdown } from "react-native-element-dropdown";
// import { useDispatch } from 'react-redux';
// import { addDocTitle } from '../redux/slice';
// import { ALLDOCINFO } from "../../util/const";

export default function DocumentType({navigation}: any) {
    // Add your logics
    const docTypeArr: any[] = [
        {label: "Front Cover", value: 'd-fro1'},
        // {label: "Back Cover", value: 'd-bac2'},
        // {label: "Survey Plan", value: 'd-sur3'},
        // {label: "Receipts", value: 'd-rec4'},
        // {label: "title document", value: 'd-tit5'},
        // {label: "Vetting and Recommendation", value: 'd-vet6'},
        // {label: "Electrical drawing", value: 'd-ele7'},
        // {label: "Structural drawing", value: 'd-str8'},
        // {label: "Architectural drawing", value: 'd-arc9'},
        // {label: "Mechanical drawing", value: 'd-mec10'},
        // {label: "Application form", value: 'd-app11'},
        // {label: "Query", value: 'd-que12'}
    ]
    

    const [arrOfDocsTitle, setArrOfDocsTitle] = useState([])
    const [selected, setSelected] = useState([]);
    const [docInfo, setDocInfo] = useState();
    const [selectedArrOfObj, setSelectedArrOfObj] = useState([{}])

    // const dispatch = useDispatch();

    const saveToStorage = async (selectedDocInfo: object[]) => {
      for (const oneDocInfo of selectedDocInfo) {
        // dispatch(addDocTitle(oneDocInfo))
      }
    }
    
    const getSelectedDocTitlesObjIntoArr = () => {
      const arrOfTitles = [];
      for (var obj of docTypeArr) {
        for (var thg of selected) {
          if (obj.value === thg) {
            arrOfTitles.push(obj)
          }
        }
      }
      return arrOfTitles;
    }

    const getAllDocTitlesArr = () => {
      const selectedDocsTitlesArr = getSelectedDocTitlesObjIntoArr();
      const combinedDocsTitlesArr = [...selectedDocsTitlesArr, ...arrOfDocsTitle];
    // //   props.onPassDocsTitle(combinedDocsTitlesArr);
      saveToStorage(combinedDocsTitlesArr);
    //   console.log('doc titles: ', combinedDocsTitlesArr)
      setArrOfDocsTitle([]);
      setSelected([]);
      navigation.push('screenStack/partsToScan');
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

    
    const changeTitleTextToObj = (text: React.SetStateAction<undefined>) => {
      setDocInfo(text);
    }

    const submitDocTitles = () => {
      let titleObj = {
        label: docInfo,
        value: Math.random().toString(36).substring(7)
      }
      // console.log("Current target", arrOfDocsTitle, "titleObj3", titleObj)
      // console.log("Current target", arrOfDocsTitle, "titleObjSubmit2", documentTitle)
//setArrOfDocsTitle([...arrOfDocsTitle, titleObj]);
      // arrOfDocsTitle.push(titleObj);
      // console.log("Arr", arrOfDocsTitle)
//setDocInfo(' ')
      
    }

    const deleteTitleBox = (removeVAL: GestureResponderEvent) => {
      //get the index of the exact item
      // pass it to the splice method
      const arrOfDocsTitleToRemoveFrom = [...arrOfDocsTitle]
      // const indexOfItemTodelete = arrOfDocsTitleToRemoveFrom
      //       .findIndex(titleItm => titleItm.label === removeVAL.label );
      // arrOfDocsTitleToRemoveFrom.splice(indexOfItemTodelete, 1);
      setArrOfDocsTitle(arrOfDocsTitleToRemoveFrom);
      // console.log('deleting', arrOfDocsTitleToRemoveFrom)
      ToastAndroid.show('Deleted', ToastAndroid.SHORT)
    }

    return(
        <SafeAreaView style={styles.dropdownPages}>        
            <View>
                <Text style={styles.docsTitle}> Select Document Title:</Text>
                {/* As docs title is typed and submitted, the array
                is populated. The SelectDropdown comp picks from that
                array.
                PROCESS AND STEP
                As the selects teh docs title from the dropdropdown, it normally
                leads them to the camera page for scanning. This means that the 
                title have to go the db with docs. On next visit, the itemTitle 
                array need to come from the db by https call then. So he can have the
                list of previews itemtitle again.
                in the docs title and submit. They get into 
                the array.
                */}
                {/* <TextInput
                    style={styles.input}
                    placeholder="Document's Identity"
                    value={documentTitle}
                    onChangeText={setDocumentTitle} 
                /> */}
            </View> 
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

            {/* From input box */}
            
              {/* <View> 
                {arrOfDocsTitle.map(itm => {
                  return(
                      <TouchableOpacity 
                        onPress={(itm) => deleteTitleBox(itm)} 
                        key={itm.value} 
                        style={styles.selectedStyle}
                      >
                        <Text 
                          style={styles.textSelectedStyle}
                        >
                          {itm.label}
                        </Text>
                            <AntDesign name="delete" size={15} color="steelblue" />
                      </TouchableOpacity>
                  )
                })}
              </View> */}
            
          </ScrollView>

            {/* <View style={styles.space}></View> */}
            <View style={styles.inputSelect}>
                <Text style={styles.inputDocsTitle}>Enter a Name or Title for your Document</Text>
                <TextInput 
                  style={styles.docsTitleTextInput}
                  value={docInfo}
                  // onChangeText={changeTitleTextToObj}
                  onSubmitEditing={submitDocTitles}
                  placeholder="Eg: car paper, Employee agreement"                  
                  cursorColor={'#5C8FAB'}
                  placeholderTextColor= "#5C8FAB"
                  // inputMode={casing? 'numeric':'text'}
                />
                {/* <View> */}
                  {/* <Text>{selected}</Text> */}
                  {/* <Link href='/partsToScan'> */}
                    <Button 
                      title='Submit'
                      onPress={getAllDocTitlesArr}
                    />
                  {/* </Link> */}
                {/* </View> */}
            </View>
        </SafeAreaView>
    )
   
}

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