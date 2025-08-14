import React, { useEffect } from "react";
import { View } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { getDocumentInfo, saveData } from "../api/genApi";
import { TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EditingPen({apiPath}:any) {
    const navi = useNavigation()
    useEffect(()=>{
        getDocumentInfo(`${apiPath}`);
    },[apiPath])
    
    const nav = () => {
        // navi.navigate('viewComment');
    }
    return (
        <TouchableHighlight onPress={nav}>
            <MaterialCommunityIcons name="pen" size={15} color='gray' />
        </TouchableHighlight>
    )
}