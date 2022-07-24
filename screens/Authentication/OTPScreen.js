import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const OTPScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>

        <View style={{ width:197,marginBottom: 60, alignItems:"center" }}>
            <Image style={styles.image} source={require("../../assets/logoIcon.png")} />
            <Image style={styles.imageSignature} source={require("../../assets/Hyways.png")} />
        </View>
 
        <StatusBar style="auto" />

        <View style={styles.inputViewLabelContainer}>
            <Text style={styles.inputViewLabel}>OTP VERIFICATION</Text>
        </View>

        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Phone Number"
                placeholderTextColor="#003f5c"
                onChangeText={(number) => setPhoneNumber(number)}
            />
        </View>

            
        <TouchableOpacity style={styles.verifyBtn}>
            <Text style={styles.verifyText}>VERIFY</Text>
        </TouchableOpacity>

    </View>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position:"relative"
    },
    image: {
      width:117.81,
      height:61.6,
      marginBottom:25
    },
    imageSignature: {
      width:175,
      height:68,
    },
    inputView: {
        // backgroundColor: "#FFC0CB",
        backgroundColor: "transparent",
        borderRadius: 30,
        // width: "70%",
        width: 297,
        height: 45,
        marginBottom: 20,
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "#C4C7C4"
    },
    inputViewLabelContainer: {
        marginBottom: 20,
        // marginLeft:20
    },
    inputViewLabel: {
        fontWeight: "900",
        fontSize: 24
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    verifyBtn:
    {
        // width: "70%",
        width: 297,
        borderRadius:30,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        backgroundColor: "#00B906"
    },
    verifyText: {
        color:"#ffffff",
        fontWeight: "900",
        fontSize: 17,
        // marginBottom: 10,
        // marginLeft:20
    }
});