import React, {useState, useContext} from 'react';

import { StatusBar } from 'expo-status-bar';
import Checkbox, { CheckboxEvent } from 'expo-checkbox';

import { Alert, Button, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';

import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';
import { StudentContext } from '../../context/studContext';
import { saveData } from '../../api/genApi';

export default function AffectiveEntry(props: any) {
    const studentData = useContext(StudentContext);
  const [affectiveData, setAffetiveData] = useState([{ 
            title: '',
            indexPosition: '',
            schId: studentData.schId,
            studId: studentData.id 
        }]);
  const [isChecked, setChecked] = useState(false);
  const val = {
    tableHead: ['Title', '1', '2', '3', '4', '5'],
    widthArr: [200, 60, 60, 60, 60, 60]
    }
        
    const [tableVal, setTableVal] = useState(val);

    let itm = `
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                // onChange={(event) => setCheckedBox(event)}
                onValueChange={()=>{
                    setCheckedBox(para[0], para[1], para[2], para[3])
                }}
                color={isChecked ? '#4630EB' : undefined}
            />`;

    function _alertIndex( data: any, biggerIndex: any, smallerIndex: any, title: any) {
        let studentMeta = {
                studId: studentData.id,
                schId: studentData.schId,
                title: title, 
                indexPosition: biggerIndex.toString()+smallerIndex.toString()
            }
        affectiveData.forEach((oneMeta) => {
            if(oneMeta.indexPosition[0] === biggerIndex.toString()) {
                let oneMetaIdx = affectiveData.indexOf(oneMeta);
                 
                Alert.alert('You Picked duplicate value on the same title');
                setAffetiveData(
                    // affectiveData.filter(t => t.indexPosition !== (biggerIndex+smallerIndex))
                    affectiveData.filter(t => t.indexPosition[0] !== biggerIndex.toString())
                );
                // setAffetiveData([...affectiveData, studentMeta ]);
            } else {
                console.log('oneMeta.indexPosition[0]', biggerIndex, affectiveData)
                        
                setAffetiveData([...affectiveData, studentMeta ]);
                ToastAndroid.show(`You Picked ${data} from ${title}`, ToastAndroid.SHORT)
            }
        })
        //   setAffetiveData(
        //                     // affectiveData.filter(t => t.indexPosition !== (biggerIndex+smallerIndex))
        //                     affectiveData.filter(t => t.indexPosition[0] !== biggerIndex.toString())
        //                 )           
    }

            const state = {...tableVal};
            let tableData: any[] = [
                ['title0', '1', '2', '3', '4', '5'],
                ['title1', '1', '2', '3', '4', '5'],
                ['title2', '1', '2', '3', '4', '5'],
                ['title3', '1', '2', '3', '4', '5'],
              ];
            // let tableData: any[] = [
            //     ['title0', itm, itm, itm, itm, itm],
            //     ['title1', itm, itm, itm, itm, itm],
            //     ['title2', itm, itm, itm, itm, itm],
            //     ['title3', itm, itm, itm, itm, itm],
            //   ];
            //   tableData.forEach()
            // for (let i = 0; i < 10; i += 1) {
            //     const rowData = [];
            //     for (let j = 0; j < 6; j += 1) {
            //       rowData.push(`${i}${j}`);
            //     }
            //     tableData.push(rowData);
            //   } 
              const setCheckedBox = (...varData: any) => {
                console.log('I am her');
                setChecked(true);
              }

    const purgeData = (idxI: number, idxJ: number, title: string) => {
        let arrForWork: any[] = [{
            id: '0', 
            name: '', 
            title: '',
            indexPosition: ''
        }];
        
//collect all entered data
        //match each with student context data
        // validate each for duplicate
        //inform the user if duplicate exists
        //accept changes
        //save to state.
        let studentMeta: object = {
                studId: studentData.id,
                schId: studentData.schId,
                title: title, 
                indexPosition: idxI.toString()+idxJ.toString()
            }

        arrForWork.push(studentMeta);
        console.log('purge', idxI, affectiveData);
        arrForWork.forEach((checkDatum) =>{
            if(idxI.toString() === checkDatum.indexPosition[0]) {
                Alert.alert(
                    `You Picked duplicate value on the same title, 
                    we\'ve replaced the former`);
                let studentOneMeta = {
                    studId: studentData.id,
                    schId: studentData.schId,
                    title: title, 
                    indexPosition: idxI.toString()+idxJ.toString()
                }
                arrForWork.splice(arrForWork.indexOf(checkDatum), 1, studentOneMeta);

            }

            if(checkDatum.title === undefined || checkDatum.title === '') {
                arrForWork.splice(arrForWork.indexOf(checkDatum), 1);
                setAffetiveData([...affectiveData, ...arrForWork]);
                // console.log('purge2', idxI);
            }

        })
        // setAffetiveData([...affectiveData, studentMeta]);
        setAffetiveData(
            affectiveData.filter(dataFilter => dataFilter.title !== undefined || dataFilter.title !== '')
        )
    }
            // const element = (data: any, bigIndex: any, smallIndex: any, title: any) => {
            const element = (...para: any) => {
                // console.log(typeof(para[0]), para[1], para[2], para[3]);
                return (
                    <TouchableOpacity 
                        onPress={() => {
                            _alertIndex(
                                para[0], 
                                para[1], 
                                para[2], 
                                para[3]
                            )
                        }}
                        // onPress={() => {_alertIndex(data, bigIndex, smallIndex, title)}}
                    >
                    {/* <View style={styles.section}>
                        
                    </View> */}
                    <View style={styles.btn}>
                        <Text 
                            style={styles.btnText}
                        >
                            {'0'+para[0]}
                        </Text>
                    </View>
                    </TouchableOpacity>
                )
            }

    const submitIt = async () => {
        Alert.alert('Uploading! ...');
        // ToastAndroid.show('Uploading! ...', ToastAndroid.LONG)
        const apiResp = await saveData(affectiveData, 'api/v1/affective');
        console.log('affect api res', apiResp);
    }

    return (
        <View style={styles.container}>
            
            <Text 
                style={{alignSelf: 'center', fontSize: 20, fontWeight: '500'}}
            >
                AFFECTIVE DOMAIN
            </Text>
            <ScrollView horizontal={true} >
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                        <Row 
                            data={state.tableHead} 
                            widthArr={state.widthArr} 
                            style={styles.header} 
                            textStyle={styles.text}
                        />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                            {
                            //filterTableVal.length === 0? setfilteredTableArr(tableData)
                                //  if (filterTableVal.length === 0) 
                                //     setfilteredTableArr(tableData)
                                // filteredTableArr
                                tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.tableWrapperRow}>
                                        {
                                            rowData.map((cellData: any, cellIndex: any) => (
                                                <Cell 
                                                    width={state.widthArr[cellIndex]} 
                                                    //height={20} 
                                                    flex={1} 
                                                    key={cellIndex} 
                                                    data={
                                                        cellIndex > 0? 
                                                                element(cellData, index, cellIndex, rowData[0]) 
                                                            :   cellData
                                                    } 
                                                    textStyle={styles.text} 
                                                />
                                            ))
                                        }
                                    </TableWrapper>
                                ))
                                    
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
            <View 
                style={{
                    marginTop:20,
                }}>
                <Button 
                    title="Submit"
                    onPress={submitIt}
                    // disabled={errForRegInput}
                />
            </View>
        </View>
    )
    
}



const styles = StyleSheet.create({
    container: { padding: 16, paddingTop: 30, height: 780, },
    header: { height: 50, backgroundColor: 'steelblue'},
    text: { textAlign: 'center', fontWeight: '400'},
    dataWrapper: { marginTop: -1 },
    row: { height: 40, 
        backgroundColor: '#E7E6E1' 
        // backgroundColor: 'red',
    },
    tableWrapperRow: { 
        flexDirection: 'row', 
        backgroundColor: '#FFF1C1' 
    },
    btn: { 
        width: 40, 
        height: 18, 
        backgroundColor: '#78B7BB',  
        borderRadius: 2,
        alignSelf: 'center'
    },
    btnText: { 
        textAlign: 'center', 
        color: '#fff', 
        textDecorationLine: 'underline',
        fontSize: 12 
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      paragraph: {
        fontSize: 15,
      },
      checkbox: {
        margin: 8,
      },
     
    });    