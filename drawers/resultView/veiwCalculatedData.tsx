import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet,ScrollView, } from "react-native";

export default function ViewGrandTotals() {
    return (
        <SafeAreaView style={styles.perform}>
            <View>
                <Image 
                    style={styles.grandTotal}
                    source={require('../../assets/avarter.jpg')}
                />
                <Text>{'studentName'}</Text>
            </View>
            
            <View>
                <View style={styles.roundScore}>
                    <Text style={{fontSize:25,fontWeight:'500'}}>{'70%'}</Text>
                    {/* with a round indicator */}
                </View>
                <Text>{'Overall Performance'}</Text>
            </View> 
            <ScrollView>
                <View>
                    <View style={styles.studentPerformance}>
                        <View style={styles.performanceBox}>
                            <Text style={styles.performanceTxts}>Grand Total Score: {'from api'}</Text>
                            <Text style={styles.performanceDesc}>{534}</Text>
                        </View>

                        <View style={styles.performanceBox}>
                            <Text style={styles.performanceTxts}>Average Score: {' from api'}</Text>
                            <Text style={styles.performanceDesc}>{53.4}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.studentPerformance}>
                        <View style={styles.performanceBox}>
                            <Text style={styles.performanceTxts}>Grade: {' from api'}</Text>
                            <Text style={styles.performanceDesc}>{'C'}</Text>
                        </View>

                        <View style={styles.performanceBox}>
                            <Text style={styles.performanceTxts}>Qualitative Description: {' from api'}</Text>
                            <Text style={styles.performanceDesc}>{'Average'}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.studentPerformance}>
                        <View style={styles.performanceBox}>
                            <Text style={styles.performanceTxts}>Behavoural Description: {' from api'}</Text>
                            <Text style={styles.performanceDesc}>{'Passionate'}</Text>
                        </View>

                        <View style={styles.performanceBox}>
                            <Text style={styles.performanceTxts}>Specific skill: {' from api'}</Text>
                            <Text style={styles.performanceDesc}>{'Critical-Thinking'}</Text>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    performanceDesc:{
        color:'#DB6D32',
        fontSize:25,
        // fontStyle:
        // fontFamily:
        alignSelf:'center',
        textAlignVertical:'center',
    },
    performanceTxts: {
        // color: 

    },
    performanceBox: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#DB6D32',
        margin:3,
        padding:5
    },
    studentPerformance:{
        flexDirection:'row',
    },
    perform: {
        alignItems: 'center'
    },
    roundScore: {
        height: 120,
        width: 120,
        borderWidth: 6,
        borderRadius: 80,
        borderColor:'#DB6D32',
        justifyContent:'center',
        alignItems:'center'
    },
    grandTotal: {
        height: 100,
        width: 100,
        borderRadius: 50
    }
})