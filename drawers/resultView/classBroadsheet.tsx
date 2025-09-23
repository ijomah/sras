import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Table, TableWrapper, Row } from 'react-native-reanimated-table';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { html } from '../../sch-res-PDF-output/otega-senior';


export default function ClassBroadSheetPage(props: any) {
  const [selectedPrinter, setSelectedPrinter] = useState();
        const [affectiveData, setAffetiveData] = useState([]);
        const {tableHeadDet, tableBodyDet}  = props
        
        
        const val = {
                tableHead4subject: ['', 'Subjects', 'Maths', 'Eng', 'Biology', 'Economics', 'Commerce', 'Chmistry'],
                subWidthArr:[30, 200, 108, 108, 108, 108, 108, 108],
                tableHead: ['S/N', 'NAME', 'CA', 'EXAM', 'TOTAL', 'CA', 'EXAM', 'TOTAL', 'CA', 'EXAM', 'TOTAL', 'CA', 'EXAM', 'TOTAL', 'CA', 'EXAM', 'TOTAL', 'CA', 'EXAM', 'TOTAL'],   //4armSheet
                widthArr: [30, 200, 30, 38, 40, 30, 38, 40, 30, 38, 40, 30, 38, 40, 30, 38, 40, 30, 38, 40],    //4armSheet
                genSheetArr: ['', 'Subjects', 'Maths', 'Eng', 'Biology', 'Economics', 'Commerce', 'Chmistry'],  //4GENSHEET
                genWidthArray: [30, 200, 40, 40, 40, 40, 40, 40]    //4genSHEET
            }
        const [tableVal, setTableVal] = useState(val);
        let sheet

        // if (sheet === 'armSheet') {
          const state = {...tableVal};
        // } else if(sheet === 'classSheet') {
          // const state = {...tableVal};
        // }

                  const tableData = [];
                  for (let i = 0; i < 15; i += 1) {
                    const rowData = [];
                    for (let j = 0; j < 20; j += 1) {
                      rowData.push(`${i}${j}`);
                    }
                    tableData.push(rowData);
                  }   

                  const getArmTable = (gr: []) => {
                    return gr.filter((a)=> a ==='NAME' || a ==='TOTAL' || a ==='S/N')
                  }
          
          
            const print = async () => {
              // On iOS/android prints the given html. On web prints the HTML from the current page.
               await Print.printAsync({
                html
                // printerUrl: selectedPrinter?.url, // iOS only
              }); 
            };
          
            const printToFile = async () => {
              // On iOS/android prints the given html. On web prints the HTML from the current page.
               const { uri } = await Print.printToFileAsync({ html }); 
              console.log('File has been saved to:', uri);
              await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
            };
          
            const selectPrinter = async () => {
               const printer = await Print.selectPrinterAsync(); // iOS only
              // setSelectedPrinter(printer);
            };
                  
                  return (
                  <View style={styles.container}>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                      <Button 
                        title="Arm"
                        color={'#56DB32'}
                        // onPress={getArmTable}
                      />
                      <Button 
                        title="Download"
                        color={'#56DB32'}
                        // onPress={toPdf}
                        onPress={printToFile}
                      />
                      <Button 
                        title="Class"
                        color={'#56DB32'}
                        // onPress={getClassTable}
                      />
                      <Button 
                        title="Download"
                        color={'#56DB32'}
                        // onPress={toPdf}
                        onPress={print}
                      />
                    </View>
                    <Text
                      style={{alignSelf: 'center', fontSize: 20, fontWeight: '500'}}
                    >BROADSHEET</Text>
                    <ActivityIndicator 
                      size={'large'} 
                      // style={}
                    />
                      <ScrollView horizontal={true} >
                      <View>
                          <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                            <Row data={state.tableHead4subject} widthArr={state.subWidthArr} style={styles.header} textStyle={styles.text}/>
                          <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                          </Table>
                          <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{borderWidth: 1, borderColor: '#DB6D32'}}>
                              {
                              tableData.map((rowData, index) => (
                                  <Row
                                  key={index}
                                  data={rowData}
                                  widthArr={state.widthArr}
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
      
      const styles = StyleSheet.create({
        container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
        header: { height: 50, backgroundColor: '#56DB32'},
        text: { textAlign: 'center', fontWeight: '400'},
        dataWrapper: { marginTop: -1 },
        row: { height: 40, backgroundColor: '#E7E6E1' }
        });    
      