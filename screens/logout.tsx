import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, TextInputComponent, TextInput, Button, ScrollView } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useAuth0 } from "react-native-auth0";


const LogoutButton = () => {
    const {clearSession} = useAuth0();

    const onPress = async () => {
        try {
            await clearSession();
        } catch (e) {
            console.log(e);
        }
    };

    return <Button color={'red'} onPress={onPress} title="Log out" />
}

export default LogoutButton;