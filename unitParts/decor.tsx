import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';

// export default function ImageHeader() {
//     return (
//             <Image
//                 style={{width: 150, height: 50}}
//                 source={require('../../assets/logoheading.png')}
//             />    
//     )
// }

export default function TopDecor({textTitle}:any) {
    const {height, width, fontScale} = useWindowDimensions()
    return (
      <LinearGradient style={{width: width, height: height / 5, padding: width / 10, borderColor: '#DB6D32',
        backgroundColor: '#DB6D32', 
         borderBottomLeftRadius: 100, borderBottomRightRadius: 100,}} colors={['#DB6D32','#56DB32', '#DB6D32']} start={{x: 0.9, y: 0.01}}>
      <View >
        <View>
            <Text>
                {`Values for ${textTitle} Result`}
            </Text>
        {/* </View>
        <View> */}
            <Text>
                {`Please enter ${textTitle} values carefully`}
            </Text>
        </View>
      </View>
      </LinearGradient>
    );
  }