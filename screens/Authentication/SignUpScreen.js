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
  Platform,
  Alert,
  ActivityIndicator
} from "react-native";
// import { Alert } from "react-native-web";
// import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { SafeAreaView } from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Constants from "expo-constants";

// import * as Google from 'expo-google-app-auth';
import * as Google from "expo-auth-session/providers/google"
// import * as Facebook from "expo-auth-session/providers/facebook"
import * as WebBrowser from "expo-web-browser"

import * as Facebook from 'expo-facebook';

import colors from "../../constants/colors";

import ErrorMessage from "../../components/ErrorMessage";

// FireBase
import { auth, firebase } from "../../config/firebase";

WebBrowser.maybeCompleteAuthSession();

const SignUpScreen = ({ navigation }) => {

    const [ accessToken, setAccessToken ] = React.useState('');
    const [ userInfo, setUserInfo ] = React.useState();

    // Google.useIdTokenAuthRequest

    const [ request, response, promptAsync ] = Google.useIdTokenAuthRequest({
        androidClientId: Constants.manifest.extra.androidClientId,
        iosClientId: Constants.manifest.extra.iosClientId,
        // expoClientId: "926363447781-fq2o3f80bpk00c9ns1shd9is7vio9llc.apps.googleusercontent.com",
        expoClientId: Constants.manifest.extra.expoClientId,
        scopes: ['profile', 'email'],
        // clientId
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ successMessage, setSuccessMessage ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    // Handler
    const registerHandler =  async () => {
        try {
          if (email !== '' && password !== '') {
            console.log('User registration processing!')
            await auth.createUserWithEmailAndPassword(email, password);
            console.log('User registered successfully!')
            setSuccessMessage('User registered successfully!')
            setIsLoading( false )
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading( false )
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }
    };

    React.useEffect(() => {
        console.log( "response>> ", response)
        if( response?.type == "success" ) {
            // const token = response.authentication.accessToken
            const token = response.params.id_token
            setAccessToken( token );
            const credential = firebase.auth.GoogleAuthProvider.credential( token )
            // console.log("Credentials >> ", credential)
            auth.signInWithCredential(credential)
                .then(user => { // All the details about user are in here returned from firebase
                    console.log('Logged in successful', user)
                })
                .catch((error) => {
                    console.log('Error occurred ', error)
                });

            // fetch( "https://www.googleapis.com/userinfo/v2/me", {
            //     headers: { Authorization: `Bearer ${token}` }
            // } )
            // .then( res => res.json() )
            // .then( data => {
            //     console.log(data)
            //     if(data) {
            //         setUserInfo(data)
            //     }
            // })
            // .catch( err => console.error( err ) );
        }
        return () => {
            setAccessToken('')
        }
    }, [response])

    // const getUserData = () => {
    //     // console.log(accessToken)
    //     // let userInfoResponse; 
    //     fetch( "https://www.googleapis.com/userinfo/v2/me", {
    //         headers: { Authorization: `Bearer ${accessToken}` }
    //     } )
    //     .then( res => res.json() )
    //     .then( data => {
    //         console.log(data)
    //         if(data) {
    //             setUserInfo(data)
    //             const credential = firebase.auth.GoogleAuthProvider.credential( data.authentication.accessToken )
    //             auth.signInWithCredential(credential)
    //             .then(user => { // All the details about user are in here returned from firebase
    //               console.log('Logged in successful', user)
    //             })
    //             .catch((error) => {
    //               console.log('Error occurred ', error)
    //             });
    //         }
    //     })
    //     .catch( err => console.error( err ) );

    // }

    const fbHandleAuth = async () => {
        try {
            const appId = Constants.manifest.extra.fbAppId;
            // const fbAppSecret = Constants.manifest.extra.fbAppSecret;

            // await Facebook.initializeAsync( { appId, appName: 'Hyways' } ); // enter your Facebook App Id
            await Facebook.initializeAsync( appId ); // enter your Facebook App Id

            const { type, token } = await Facebook.logInWithReadPermissionsAsync({
              permissions: ['public_profile', 'email'],
            });

            if (type === 'success') {
              // SENDING THE TOKEN TO FIREBASE TO HANDLE AUTH
              const credential = firebase.auth.FacebookAuthProvider.credential( token );
              auth.signInWithCredential(credential)
                .then(user => { // All the details about user are in here returned from firebase
                  console.log('Logged in successfully', user)
                })
                .catch((error) => {
                  console.log('Error occurred ', error)
                });
            } else {
              // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

  return (
    <SafeAreaView style={{ flex: 1 }} mode="margin" edges={['right', 'bottom', 'left']} >
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}} extraScrollHeight={100} enableOnAndroid={true} 
   keyboardShouldPersistTaps='handled'>

            <View style={styles.container}>

                <View style={{ marginTop: 40, marginBottom:30 }}>
                    <Image style={styles.image} source={require("../../assets/logo/logo.png")} />
                </View>

                <StatusBar style="auto" />

                <View
                    style={{backgroundColor:colors.defaultBGColor}}
                >
                    <View style={styles.inputViewContainer}>
                        <View>
                            <Text style={styles.inputViewLabel}>Email</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.textInput}
                                disabled={isLoading}
                                placeholder="Enter Email"
                                keyboardType="email-address"
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
                                style={styles.textInput}
                                disabled={isLoading}
                                placeholder="Enter Password"
                                placeholderTextColor="#003f5c"
                                secureTextEntry={true}
                                onChangeText={(password) => setPassword(password)}
                                value={password}
                            />
                        </View>

                        <View>
                            <Text style={styles.inputViewLabel}>Confirm Password</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.textInput}
                                disabled={isLoading}
                                placeholder="Enter Password"
                                placeholderTextColor="#003f5c"
                                secureTextEntry={true}
                                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                                value={confirmPassword}
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.signUpBtn}
                        onPress={registerHandler}
                        disabled={isLoading}
                    >
                        <Text style={styles.signUpText}>Create an Account</Text>
                    </TouchableOpacity>

                    {
                        isLoading &&

                        <View style={styles.preloader}>
                            <ActivityIndicator size="large" color="#00B906"/>
                        </View>

                    }

                    {errorMessage ?
                        <View style={{width:297,marginTop:20}}>
                            <ErrorMessage error={errorMessage.replace("Firebase: ", '')} visible={true} />
                        </View> : null}

                    <TouchableOpacity
                        style={styles.bottomLink}
                        onPress={() => navigation.navigate( "SignIn" ) }
                    >
                        <Text>Already Have An Account?</Text>
                    </TouchableOpacity>


                    <View style={{marginVertical:20,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <View style={{backgroundColor:"#00B906",width:123,height:1}} />
                        <View style={{marginHorizontal:10}}>
                            <Text>OR</Text>
                        </View>
                        <View style={{backgroundColor:"#00B906",width:123,height:1}} />
                    </View>

                    <View style={{marginBottom:20,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity
                            style={{marginHorizontal:10}}
                            onPress={() => promptAsync( { showInRecents: true, useProxy: true } ) }
                        >
                            <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/google.png" )} />
                        </TouchableOpacity>

                        {/* <TouchableOpacity
                            style={{marginHorizontal:10}}
                            onPress={() => console.log("INSTAGRAM Screen")}
                        >
                            <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/instagram.png" )} />
                        </TouchableOpacity> */}

                        <TouchableOpacity
                            style={{marginHorizontal:10}}
                            onPress={() => fbHandleAuth()}
                        >
                            <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/facebook.png" )} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{marginHorizontal:10}}
                            onPress={() => console.log("BOXUSERVOICE SignUp")}
                        >
                            <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/bxs-user-voice.png" )} />
                        </TouchableOpacity>
                    </View>
                </View>



                {/* <LineComponent /> */}
                <View style={{flex:1,backgroundColor: colors.primaryColor,width:192,maxHeight:5,marginBottom:25, marginTop:"auto"}} />

            </View>

        </KeyboardAwareScrollView>

    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.defaultBGColor,//'#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    preloader:{
        marginVertical:20,
        width:"100%"
    },
    inputViewContainer: {
        alignItems: "flex-start"
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
    textInput: {
        height: 45,
        width:297,
        // flex: 1,
        // paddingHorizontal: 10,
        marginLeft: 20,
    },

    infoViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 280,
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
    signUpBtn:
    {
        // width: "70%",
        width: 297,
        borderRadius:30,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        backgroundColor: "#00B906"
    },
    signUpText: {
        color:"#ffffff",
        fontWeight: "900",
        fontSize: 17,
        // marginBottom: 10,
        // marginLeft:20
    },
    bottomLink: {
        marginTop:25,
        // marginHorizontal:"auto"
        alignItems:"center"
    }
});