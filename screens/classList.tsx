// import { DefaultTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Image, StyleSheet, FlatList, TouchableOpacity, Text, View } from "react-native";

// import { places } from "../data";

const ClassListPage = ({navigation, route}: any) => {
    //push it to store- ie the list od students from api
    //This api call will be made with teacher's id (in order
    // to get the (or his/her) right student list)
    // array of objs with db id and student name 
    //from student and name table
    const classListFromSlice: object[] = [
        //sch id is needed here for the sake of the sch_id column
        { name: 'Nursery 1', id: '1', teachId: '2', schId: '2'},
        { name: 'Nursery 2', id: '2', teachId: '2', schId: '2'},
        { name: 'Basic 1', id: '3', teachId: '2', schId: '2'},
        { name: 'Basic 2', id: '4', teachId: '3', schId: '2' },
        { name: 'Basic 3', id: '5', teachId: '4', schId: '2'},
        { name: 'Basic 4', id: '6', teachId: '5', schId: '2'},
        { name: 'Basic 5', id: '7', teachId: '8', schId: '2'},
        { name: 'Basic 6', id: '8', teachId: '9', schId: '2'},
        { name: 'JSS 1', id: '9', teachId: '19', schId: '2'},
        { name: 'JSS 2', id: '10', teachId: '20', schId: '2'},
        { name: 'JSS 3', id: '11', teachId: '21', schId: '2'},
        { name: 'SSS 1', id: '12', teachId: '22', schId: '2'},
        { name: 'SSS 2', id: '13', teachId: '23', schId: '2'},
        { name: 'SSS 3', id: '14', teachId: '24', schId: '2'},
        
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
                    navigation.navigate('studList', {
                                    pathName: routeName,  
                                    name: item.name,
                                    id: item.id,
                                    schId: item.schId,
                                    teacherId: item.teachId
                                })
                }}
            >
                <View>
                    <Image 
                        source={require('../assets/classy.jpg')}
                        style={{width:70, height:50, borderRadius: 10}}
                    />
                    <Text style={{textAlign:'center'}}>{item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList 
            style={styles.studentNameStyle}
            contentContainerStyle={{alignItems: 'center'}}
            data={classListFromSlice}
            renderItem={showStudList}
            numColumns={2}
        />
    )
}

export default ClassListPage;

const styles = StyleSheet.create({
    studentNameStyle: {
        //put style
        alignSelf: 'center', 
        marginTop: 10,
        height: 100, 
        width: '95%',
    },

    pressable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 14,
        width: '46%',
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
        borderColor: '#DB6D32',
        borderWidth: 1
    },


})