import React, {useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileData() {
    return (
        <View style={styles.header}>
            <Image
              source={require('./../assets/minepix.jpg')} // Replace with your image path
              style={styles.profileImage}
            />
            <Text style={styles.userName}>{'Jacob'}</Text>
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