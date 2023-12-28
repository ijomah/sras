import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-reanimated-table';

import { AntDesign } from '@expo/vector-icons';

export default function ResultPreviewer(props: any) {
  const [affectiveData, setAffetiveData] = useState([]);
  const {tableHeadDet, tableBodyDet}  = props
  
    const val = {
        tableHead: ['Title', '1', '2', '3', '4', '5'],
        widthArr: [200, 60, 60, 60, 60, 60]
    }
        const [tableVal, setTableVal] = useState(val);
        const checkerBox = `<AntDesign 
                                name="checksquareo" 
                                size={20} 
                                color="black" 
                            />`

        const state = {...tableVal};
        const tableData: any[] = [];
         
    let arrFromApi: any[] = [{
        id: "1",
        indexPosition: "31",
        name: "Student 1",
        title: "title3",
    }];

    const prepDataForTable = () => {
        arrFromApi.forEach((affectDatum) => {
            let indexPosition: string = affectDatum.indexPosition;
            for (let m = 0; m < 6; ++m) {
                let rowArr: string[] = [];
                if (m === 0) {
                    rowArr.unshift('fromApi.title');
                }
                rowArr.push('');
                if(m.toString() === indexPosition[1]) {
                    rowArr[Number(indexPosition[1])] = checkerBox;
                }
                tableData.push(rowArr)
            }
        })
    }

    return (
        <View style={styles.container}>
          <Text
            style={{alignSelf: 'center', fontSize: 20, fontWeight: '500'}}
          >AFFECTIVE DOMAIN</Text>
            <ScrollView horizontal={true} >
            <View>
                <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                </Table>
                <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    {
                    tableData.map((rowArr, index) => (
                        <Row
                        key={index}
                        data={rowArr}
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
  header: { height: 50, backgroundColor: 'steelblue'},
  text: { textAlign: 'center', fontWeight: '400'},
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
  });    


