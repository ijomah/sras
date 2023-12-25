import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import Checkbox, { CheckboxEvent } from 'expo-checkbox';

import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';

export default function AffectiveEntry(props: any) {
  const [affectiveData, setAffetiveData] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const {tableHeadDet, tableBodyDet}  = props
      if (tableHeadDet === undefined && tableBodyDet === undefined) {
        const val = {
            tableHead: ['Title', '1', '2', '3', '4', '5'],
            widthArr: [200, 60, 60, 60, 60, 60]
        }
            const [tableVal, setTableVal] = useState(val);
                
            function _alertIndex(index: any, data: any) {
                Alert.alert(`You Picked ${data} ${index}`);
                setChecked(true);
              }

            const state = {...tableVal};
            let tableData: any[] = [
                ['0', '1', '2', '3', '4', '5'],
                ['0', '1', '2', '3', '4', '5'],
                ['0', '1', '2', '3', '4', '5'],
                ['0', '1', '2', '3', '4', '5'],
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

            const element = (data: any, index: any) => {
                console.log('dat', isChecked, data, index)
                return (
                    <TouchableOpacity 
                        onPress={() => {_alertIndex(index, data)}}
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
                            PRESS
                        </Text>
                    </View>
                    </TouchableOpacity>
                )
            }


            return (
            <View style={styles.container}>
              <Text>AFFECTIVE DOMAIN</Text>
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
                                                                    element(cellData, index) 
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