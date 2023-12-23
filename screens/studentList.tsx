import { DefaultTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";

// import { places } from "../data";

const StudentList = ({navigation}: any) => {
    //push it to store- ie the list od students from api
    //This api call will be made with teacher's id (in order
    // to get the (or his/her) right student list)
    // array of objs with db id and student name 
    //from student and name table
    const studentListFromSlice: any[] = [
        { name: 'Student 1', value: '1' },
    { name: 'Student 2', value: '2' },
    { name: 'Student 3', value: '3' },
    { name: 'Student 4', value: '4' },
    { name: 'Student 5', value: '5' },
    { name: 'Student 6', value: '6' },
    { name: 'Student 7', value: '7' },
    { name: 'Student 8', value: '8' },
    ];
    const showStudList = ({item}: any) => {
        return (
            <TouchableOpacity
                style={styles.studentNameStyle}
                onPress={() => {
                    //goto drawer
                    navigation.push('drawer')
                }}
            >
                <Text>{item.name
                }</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList 
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
        backgroundColor: 'skyblue', 
        marginTop: 10,
        height: 100, 
        width: 350
    }
})