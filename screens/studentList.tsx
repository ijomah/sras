// import { DefaultTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Image, StyleSheet, FlatList, TouchableOpacity, Text, View } from "react-native";

// import { places } from "../data";

const StudentList = ({navigation, route}: any) => {
    //push it to store- ie the list od students from api
    //This api call will be made with teacher's id (in order
    // to get the (or his/her) right student list)
    // array of objs with db id and student name 
    //from student and name table
    const studentListFromSlice: object[] = [
        //sch id is needed here for the sake of the sch_id column
        { name: 'Student 1', id: '1', teachId: '2', schId: '2'},
        { name: 'Student 2', id: '2', teachId: '3', schId: '2' },
        { name: 'Student 3', id: '3', teachId: '4', schId: '2'},
        { name: 'Student 4', id: '4', teachId: '5', schId: '2'},
        { name: 'Student 5', id: '5', teachId: '8', schId: '2'},
        { name: 'Student 6', id: '6', teachId: '9', schId: '2'},
        { name: 'Student 7', id: '7', teachId: '19', schId: '2'},
        { name: 'Student 8', id: '8', teachId: '20', schId: '2'},
    ];
    const showStudList = ({item}: any) => {
        // 'viewDrawer'
        //'editDrawer'
        const routeName: string =  route.params.pathName
        return (
            <TouchableOpacity
                style={styles.pressable}
                onPress={() => {
                    //goto drawer
                    navigation.navigate(routeName, {
                                    name: item.name,
                                    id: item.id,
                                    schId: item.schId,
                                    teacherId: item.teachId
                                })
                }}
            >
                <View>
                    <Image 
                        source={require('../assets/IconStudHead.jpeg')}
                        style={{width:70, height:60,}}
                    />
                    <Text>{item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList 
            style={styles.studentNameStyle}
            data={studentListFromSlice}
            renderItem={showStudList}
        />
    )
}

export default StudentList;

const styles = StyleSheet.create({
    studentNameStyle: {
        //put style
        alignSelf: 'center', 
        marginTop: 10,
        height: 100, 
        width: 260
    },

    pressable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 14,
        width: 250,
        height: 100,
        margin: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
        borderColor: '#5C8FAB',
        borderWidth: 2
    },


})