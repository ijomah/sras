import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default function ViewGrandTotals() {
    return (
        <SafeAreaView>
            <View>
                <Text>Grand Total Score: {'from api'}</Text>
            </View>

            <View>
                <Text>Average Score: {' from api'}</Text>
            </View>

            <View>
                <Text>Grade: {' from api'}</Text>
            </View>
        </SafeAreaView>
    )
}