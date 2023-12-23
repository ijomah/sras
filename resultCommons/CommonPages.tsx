import React from 'react';
import { StyleSheet, Text, Pressable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function AffectPage() {
  const nav = useNavigation()
  return (
    <SafeAreaView style={{flex: 0.955, alignItems: 'center', justifyContent: 'center'}}>
        {/* <TouchableOpacity onPress={() => router.push('../resultSheet/Affective')}> */}
        
            <View style={styles.affect}>
                <Pressable style={styles.press}
                    // onPress={() => nav.navigate('../resultSheet/Affective')}
                >
                    <Text>
                    {/* <FontAwesomeIcon icon={faFaceSmile} color={'steelblue'} size={ 50 } /> */}
                    </Text>
                    <Text>AFFECTIVE DOMAIN</Text>
                </Pressable>
            </View>
        {/* </TouchableOpacity> */}
        

        {/* <TouchableOpacity> */}
            <View style={styles.cog}>
                <Pressable style={styles.press}
                    // onPress={() => nav.navigate('../resultSheet/Cognitive')}
                >
                    <Text>
                    {/* <FontAwesomeIcon icon={faBrain} color={'steelblue'} size={50} /> */}
                    </Text>
                    <Text>COGNITIVE DOMAIN</Text>
                </Pressable>
            </View>
        {/* </TouchableOpacity> */}

        {/* <TouchableOpacity> */}
            <View style={styles.psych}>
                <Pressable style={styles.press}
                    // onPress={() => nav.navigate('../resultSheet/Psychomotor')}
                >
                    <Text>
                    {/* <FontAwesomeIcon icon={faPersonRunning} color={'steelblue'} size={50} /> */}
                    </Text>
                    <Text>PSYCHOMOTOR DOMAIN</Text>
                </Pressable>
            </View>
        {/* </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  affect: {
    flex: 0.3,
    borderWidth: 3,
    width: 200,
    margin: 10,
    borderRadius: 15,
    borderColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  psych: {
    flex: 0.3,
    borderWidth: 3,
    width: 200,
    margin: 10,
    borderRadius: 15,
    borderColor: 'orange',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cog: {
    flex: 0.3,
    borderWidth: 3,
    borderRadius: 15,
    width: 200,
    padding: 10,
    margin: 10,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  press: {
    borderRadius: 15,
    width: 200,
    height: 200,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
