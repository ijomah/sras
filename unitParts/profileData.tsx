import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import EditingPen from "./editPen";
import { getDocumentInfo } from "../api/genApi";
import { editFunc } from "./editingFunc";

export default function ProfileData() {
  useEffect(()=>{
        getDocumentInfo(``);
    },[])
    return (
        <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
              <Image
                source={require('./../assets/minepix.jpg')} // Replace with your image path
                style={styles.profileImage}
              />
              <EditingPen editFunc={editFunc}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.userName}>{'Jacob'}</Text>
              <EditingPen editFunc={editFunc}/>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
      header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Example background color
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
      },
      userName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    });