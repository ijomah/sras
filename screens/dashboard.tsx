import React from "react";
import { Button, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity, View, Text } from "react-native";

const Dashboard = ({navigation}: any) => {
    // const blurhash ='|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const itms = [
        {id: 1, do: 'studListForRes', title: "Enter Result", pathName: 'editDrawer'},
        {id: 2, do: 'studList', title: "View Result", pathName: 'viewDrawer'},
        {id: 3, do: 'studentReg', title: "Register student"},
        {id: 4, do: 'admin', title: "Admin Section"}
    ]
    // #56DB32 -green color
    //#DB6D32 - gold
    const renderThem = ({item}: any) => {
        return (
            <View>
                <Image
                    style={{
                        backgroundColor: 'skyblue', 
                        marginTop: 10,
                        height: 200, 
                        width: 300}} 
                    source={require('../assets/dashIcon.jpeg')}
                    resizeMethod="scale"
                />
                {/* <Text>{item.title}</Text> */}
                <Button 
                    title={item.title}
                    onPress={() => navigation.navigate(item.do, {pathName: item.pathName})}
                />
            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
           
            {/* <View>
                <Image 
                    source={require(blurhash)}
                    resizeMethod="scale"
                />
                <Button 
                    title=""
                    onPress={goTo}
                />
            </View>
            <View>
                <Image 
                    source={require(blurhash)}
                    resizeMethod="scale"
                />
                <Button 
                    title=""
                    onPress={goTo}
                />
            </View>
            <View>
                <Image 
                    source={require(blurhash)}
                    resizeMethod="scale"
                />
                <Button 
                    title=""
                    onPress={goTo}
                />
            </View> */}
            <FlatList
                data={itms}
                renderItem={renderThem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });