// import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TableScore from '../resultCommons/table';

export default function PsychoPage() {
  return (
    <View style={styles.container}>
      <Text>
      {/* <FontAwesomeIcon icon={faPersonRunning} size={30} /> */}
      </Text>
      <Text>PSYCHOMOTOR DOMAIN</Text>
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
