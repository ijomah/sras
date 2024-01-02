import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-reanimated-table';

import { AntDesign } from '@expo/vector-icons';

export default function PsychoPage(props: any) {
  const [affectiveData, setAffetiveData] = useState([]);
  const {tableHeadDet, tableBodyDet}  = props
      if (tableHeadDet === undefined && tableBodyDet === undefined) {
        const val = {
            tableHead: ['S/N', 'Title', '1', '2', '3', '4', '5'],
            widthArr: [30, 200, 60, 60, 60, 60, 60]
        }
            const [tableVal, setTableVal] = useState(val);
            const checkerBox = '<AntDesign name="checksquareo" size={20} color="black" />';


            const state = {...tableVal};
            const tableData = [];
            for (let i = 0; i < 15; i += 1) {
              const rowData = [];
              for (let j = 0; j < 8; j += 1) {
                rowData.push(`${i}${j}`);
              }
              tableData.push(rowData);
            }   
            return (
            <View style={styles.container}>
              <Text
                style={{alignSelf: 'center', fontSize: 20, fontWeight: '500'}}
              >PSYCHOMOTOR DOMAIN</Text>
              <ActivityIndicator size={'large'} />
                <ScrollView horizontal={true} >
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                    <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: 'steelblue'},
  text: { textAlign: 'center', fontWeight: '400'},
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
  });    
