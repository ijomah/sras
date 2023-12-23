import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TableScore from '../resultCommons/table';

export default function AffectPage() {
  const [affectiveData, setAffetiveData] = useState([]);
  return (
    <View style={styles.container}>
      <Text>
      {/* <FontAwesomeIcon icon={faFaceSmile} color={'steelblue'} size={ 32 } /> */}
      </Text>
      <Text>AFFECTIVE DOMAIN</Text>
      <TableScore />
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
