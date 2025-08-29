import React, { useEffect } from "react";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { getDocumentInfo, saveData } from "../api/genApi";
import { TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EditingPen({editFunc}:any) {
    const navi = useNavigation()
    
    
    const nav = () => {
        // navi.navigate(gotoName);
        // navi.navigate();
    }
    return (
        <TouchableHighlight onPress={editFunc}>
            <MaterialCommunityIcons name="pen" size={15} color='gray' />
        </TouchableHighlight>
    )
}