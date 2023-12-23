import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import TableScore from '../resultCommons/table';


export default function CognitPage() {
  const val = {
            tableHead: ['S/N', 'NAME', 'TEST1', 'TEST2', 'EXAM', 'TOTAL', 'GRADE', 'REMARK'],
            widthArr: [30, 200, 60, 60, 60, 60, 60, 100]
        }
            const [tableVal, setTableVal] = useState(val);
            

            const tableDet = {...tableVal};
            const tableData = [];
            for (let i = 0; i < 30; i += 1) {
              const rowData = [];
              for (let j = 0; j < 8; j += 1) {
                rowData.push(`${i}${j}`);
              }
              tableData.push(rowData);
            }  
  return (
    <View style={styles.container}>
      <Text>
      {/* <FontAwesomeIcon icon={faBrain} color={'steelblue'} size={32} /> */}
      </Text>
      <Text>COGNITIVE DOMAIN</Text>
      <TableScore tableHeadDet ={tableDet} tableBodyDet = {tableData}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
