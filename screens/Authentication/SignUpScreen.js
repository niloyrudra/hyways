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
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { SafeAreaView } from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import colors from "../../constants/colors";

import ErrorMessage from "../../components/ErrorMessage";

// FireBase
import { auth } from "../../config/firebase";

const SignUpScreen = ({ navigation }) => {
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

    // const registerHandler_ = () => {
    //     if( email == '' && password == '' ) {
    //         Alert.alert( 'Enter your details to create an account!' );
    //     }

    //     console.log(confirmPassword,password)

    //     if( password !== '' && confirmPassword != password ) {
    //         setConfirmPassword('')
    //         Alert.alert( 'Your passwords are not matching each other! Please try again.' );
    //     }
    //     else {
    //         setIsLoading( true );

    //         // firebase
    //         //     .auth()
    //         auth.createUserWithEmailAndPassword( email, password )
    //             .then( (res) => {
    //                 res.user.updateProfile({
    //                     // displayName: this.state.displayName
    //                 })
    //                 console.log('User registered successfully!')
    //                 setIsLoading( false )
    //                 setEmail('')
    //                 setPassword('')
    //                 setConfirmPassword('')
                      
    //                 // Rediect to Sign In Screen
    //                 navigation.navigate('SignIn')
    //             } )
    //             .catch( error => setErrorMessage( error.message  ) )
    //     }
    // };

    // const handleSignUp = () => {
    //     // app
    //         // .auth()
    //     // auth.createUserWithEmailAndPassword( email, password )
    //     //     .then( ( userCredemtials ) => {
    //     //         // res.user.updateProfile({
    //     //         //     // displayName: this.state.displayName
    //     //         // })
    //     //         const user = userCredemtials
    //     //         console.log('User registered successfully!', user)
    //     //         setSuccessMessage('You are registered successfully!')
    //     //         setIsLoading( false )
    //     //         setEmail('')
    //     //         setPassword('')
    //     //         setConfirmPassword('')
                    
    //     //         // Rediect to Sign In Screen
    //     //         navigation.navigate('SignIn')
    //     //     } )
    //     //     .catch( error => setErrorMessage( error.message  ) );
    // };

  return (
    <SafeAreaView style={{ flex: 1 }} mode="margin" edges={['right', 'bottom', 'left']} >
        {/* <KeyboardAvoidingView
            style={styles.container}
            behavior={ Platform.OS === "ios" ? 'padding' : 'height' }
        > */}
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}} extraScrollHeight={100} enableOnAndroid={true} 
   keyboardShouldPersistTaps='handled'>

            <View style={styles.container}>
    {/* // <KeyboardAvoidingView
    //     behavior={ Platform.OS === "ios" ? 'padding' : 'height' }
    //     style={styles.container}
    // > */}

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
                            onPress={() => console.log("GOOGLE Screen")}
                        >
                            <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/google.png" )} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{marginHorizontal:10}}
                            onPress={() => console.log("INSTAGRAM Screen")}
                        >
                            <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/instagram.png" )} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{marginHorizontal:10}}
                            onPress={() => console.log("FACEBOOK SignUp")}
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
                <View style={{flex:1,backgroundColor:"#00B906",width:192,maxHeight:5,marginBottom:25, marginTop:"auto"}} />

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