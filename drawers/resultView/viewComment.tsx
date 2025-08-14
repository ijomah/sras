import React from "react";
import { SafeAreaView, 
    View, Text, Image, 
    StyleSheet, 
    ScrollView } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ViewComment() {
    return (
        // <SafeAreaView>
        <ScrollView>
            <View style={styles.topBox}>
                {/* sch pix thumbnail */}
                <Image
                    source={require('../../assets/res.jpeg')}
                    style={{width: 50, height: 50, borderRadius: 30}}
                />
                <Text>{'name of sch'}</Text>
            </View>
            <View>
                <View style={styles.combox}>
                    <MaterialCommunityIcons name="pen" size={15} color='gray' />
                    <Text 
                        style={styles.teacherComment}
                    >Teacher's Comment:</Text>
                    <Text>{'student name'}</Text>
                    <Text>{'from api... the boy is good ...'}</Text>
                    <Image 
                        style={styles.studentCommentPix} 
                        source={require('../../assets/compix.jpg')}
                    />
                    <Text>{'emoji 4 comment'}</Text>
                </View>
                
                <View style={styles.combox}>

                    <Text
                        style={styles.teacherComment}
                    >Principal's Comment:</Text>
                    <Text>{'student name'}</Text>
                    <Text>{'from api... the boy is good ...'}</Text>
                    <Image
                        source={require('../../assets/compix.jpg')}
                        style={styles.studentCommentPix}
                    />
                    <Text>{'emoji 4 comment'}</Text>
                </View>
            </View>
        </ScrollView>
        // </SafeAreaView>
    )
}

    const styles = StyleSheet.create({
        topBox: {
            margin:3.5
        },
        studentCommentPix:{
            width: 150,
            height: 150,
            borderRadius: 30
        },
        combox: {
            backgroundColor: '#DB6D32',
            borderWidth: 1,
            borderColor: '#DB6D32',
            borderRadius: 10,
            width: 250,
            height: 250,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin:2.5
        },
        teacherComment: {
            fontSize: 20,
            fontWeight: '400'
        }
    })
