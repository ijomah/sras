import React from "react";
import { SafeAreaView, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
const RefreshComponent = () => {
    
    return (
        <ScrollView>
            <ActivityIndicator
             size="large" 
             color="#5CBFAB"
             style={{
                 // flex: 1, 
                 marginTop: 50,
                 // backgroundColor: 'red',
                 // height: 400
                 justifyContent: 'center',
                 alignSelf: 'center'
             }}
            />
        </ScrollView>
    )
}

export default RefreshComponent;