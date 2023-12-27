import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default function ViewComment() {
    return (
        <SafeAreaView>
            <View>
                <Text>Teacher's Comment:</Text>
                <Text>{'from api'}</Text>
            </View>

            <View>
                <Text>Principal's/Director's Comment</Text>
                <Text>{'from api'}</Text>
            </View>
        </SafeAreaView>
    )
}