import React, {useContext, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';
import { StudentContext } from '../../context/studContext';
import { saveData } from '../../api/genApi';

export default function PsychomotorEntry(props: any) {
    
  const [affectiveData, setAffetiveData] = useState([{}]);
  const {tableHeadDet, tableBodyDet, route}  = props
      if (tableHeadDet === undefined && tableBodyDet === undefined) {
        const val = {
            tableHead: ['Title', '1', '2', '3', '4', '5'],
            widthArr: [200, 60, 60, 60, 60, 60]
        }
            const [tableVal, setTableVal] = useState(val);
            const studentData = useContext(StudentContext);
                
            function _alertIndex( data: any, biggerIndex: any, smallerIndex: any, title: any) {
                Alert.alert(`You Picked ${data}`);
                //What if   the user picks two btns on the same row
                //What if the user wants to change the value picked by picking 
                //another on the same row
                let studentMeta = Object.assign({}, studentData, {title:title, indexPicked: biggerIndex+smallerIndex})
                setAffetiveData([...affectiveData, studentMeta ]);
              }

            const state = {...tableVal};
            let tableData: any[] = [
                ['title0', '1', '2', '3', '4', '5'],
                ['title1', '1', '2', '3', '4', '5'],
                ['title2', '1', '2', '3', '4', '5'],
                ['title3', '1', '2', '3', '4', '5'],
              ];

            // for (let i = 0; i < 10; i += 1) {
            //     const rowData = [];
            //     for (let j = 0; j < 6; j += 1) {
            //       rowData.push(`${i}${j}`);
            //     }
            //     tableData.push(rowData);
            //   } 
              const setCheckedBox = (e: any) => {
                console.log(e)
              }

              const element = (...para: any) => {
                // console.log(para[0], para[1], para[2], para[3]);
                return (
                    <TouchableOpacity 
                        onPress={() => {_alertIndex(para[0], para[1], para[2], para[3])}}
                        // onPress={() => {_alertIndex(data, bigIndex, smallIndex, title)}}
                    >
                    {/* <View style={styles.section}>
                        <Checkbox
                            style={styles.checkbox}
                            value={false}
                            onChange={(itm) => setCheckedBox(itm)}
                            color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}></Text>
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
                const apiResp = await saveData(affectiveData, 'api/v1/psychomotive');
                console.log('psycho api res', apiResp);
            }

            return (
            <View style={styles.container}>
              <Text
                style={{alignSelf: 'center', fontSize: 20, fontWeight: '500'}}
              >
                PSYCHOMOTOR DOMAIN</Text>
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
                                        // <Row
                                        //     key={index}
                                        //     data={rowData}
                                        //     widthArr={state.widthArr}
                                        //     style={[styles.row, {backgroundColor: '#F7F6E7'}]}
                                        //     textStyle={styles.text}
                                        // />
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
    } else {
         
            return (
            <View style={styles.container}>
                <ScrollView horizontal={true} >
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                    <Row data={tableHeadDet.tableHead} widthArr={tableHeadDet.widthArr} style={styles.header} textStyle={styles.text}/>
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        {
                        tableBodyDet.tableData.map((rowData: any[], index: React.Key | null | undefined) => (
                            <Row
                            key={index}
                            data={rowData}
                            widthArr={tableBodyDet.widthArr}
                            style={[styles.row, {backgroundColor: '#F7F6E7'}]}
                            textStyle={styles.text}
                            />
                        ))
                        }
                    </Table>
                    </ScrollView>
                </View>
                </ScrollView>
            </View>
            )
    }
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