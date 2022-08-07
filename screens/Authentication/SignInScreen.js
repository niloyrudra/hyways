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
  Platform
} from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { SafeAreaView } from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../config/firebase";

// import Firebase from "../../config/firebase";
// import { AuthenticatedUserContext }

// const auth = Firebase.auth();
// const auth = auth;


const SignInScreen = ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const googleHandler = async () => {
        // provider.setCustomParameters({ prompt: 'select_account' });
        // signInWithPopup(auth, provider)
        //     .then((result) => {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         const credential = GoogleAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;
        //         // The signed-in user info.
        //         const user = result.user;
        //         // redux action? --> dispatch({ type: SET_USER, user });
        //     })
        //     .catch((error) => {
        //         // Handle Errors here.
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // The email of the user's account used.
        //         const email = error.email;
        //         // The AuthCredential type that was used.
        //         const credential = GoogleAuthProvider.credentialFromError(error);
        //         // ...
        //     });
    };

    const signIn = async () => {
        if (email === '') {
            setEmailErrorMessage('Email is mandatory.')
          return;
        }
        if ( password === '') {
            setPasswordErrorMessage('password is mandatory.')
          return;
        }
    
        try {
            console.log( "processing" )
            await signInWithEmailAndPassword(auth, email, password);
            console.log( "processing end" )
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

  return (
    <SafeAreaView style={{ flex: 1 }} mode="margin" edges={['right', 'bottom', 'left']} >
        {/* <KeyboardAvoidingView
            style={styles.container}
            behavior={ Platform.OS === "ios" ? 'padding' : 'height' }
        > */}
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}} extraScrollHeight={100} enableOnAndroid={true} 
   keyboardShouldPersistTaps='handled'>

            <View style={styles.container}>

                <View style={{ marginTop: 40, marginBottom:30 }}>
                    <Image style={styles.image} source={require("../../assets/logo/logo.png")} />
                </View>
        
                <StatusBar style="auto" />

                <View style={styles.inputViewContainer}>

                    <View>
                        <Text style={styles.inputViewLabel}>Email</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={{...styles.TextInput, borderColor: emailErrorMessage ? 'red': "#C4C7C4" }}
                            placeholder="Enter Email"
                            placeholderTextColor="#003f5c"
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                        />
                    </View>

                    <View>
                        <Text style={styles.inputViewLabel}>Password</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={{...styles.TextInput, borderColor: passwordErrorMessage ? 'red': "#C4C7C4" }}
                            placeholder="Enter Password"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                        />
                    </View>
                </View>
        
                <View style={styles.infoViewContainer}>

                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image style={styles.circleCheck} source={require("../../assets/check2-circle.png")} />
                        <Text style={styles.infoText}>Keep Me logged in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => navigation.navigate( "ForgotPassword" ) }
                    >
                        <Text style={styles.infoText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={signIn}
                >
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>

                <View style={{width:297,marginTop:20}}><Text>{errorMessage}</Text></View>

                <TouchableOpacity
                    style={styles.bottomLink}
                    onPress={ () => navigation.navigate( "SignUp" ) }
                >
                    <Text>Need To Create An Account?</Text>
                </TouchableOpacity>

                {/* <LineComponent /> */}
                <View style={{flex:1,backgroundColor:"#00B906",width:192,maxHeight:5,marginBottom:25, marginTop:"auto"}} />

            </View>

        </KeyboardAwareScrollView>

    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputViewContainer: {
        alignItems: "flex-start",
        // backgroundColor: '#cccccc',
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
    inputViewLabel: {
        fontWeight: "900",
        fontSize: 17,
        marginLeft:20,
        marginBottom:5
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    infoViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 280,
        marginTop:-8
    },
    circleCheck:{
        height: 12,
        width:12,
        marginRight:10,
        marginTop:2
    },
    infoText: {
        height: 30,
        // marginBottom: 30,
    },
    loginBtn:
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
    loginText: {
        color:"#ffffff",
        fontWeight: "900",
        fontSize: 17,
        // marginBottom: 10,
        // marginLeft:20
    },
    bottomLink: {
        marginTop:0,
        // flex:1
    }
});