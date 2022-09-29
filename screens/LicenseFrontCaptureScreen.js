import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Camera, CameraType } from 'expo-camera'

import { useIsFocused } from '@react-navigation/native';

// import { auth, db } from '../config/firebase';

// Components
import UserVoiceIcon from "../components/UserVoiceIcon"

// Constants
import colors from "../constants/colors"

const LicenseFrontCaptureScreen = ( { navigation, route } ) => {
        
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ scanned, setScanned ] = useState(false);
    const [ scannedData, setScannedData ] = useState(null);
    const [ audioStatus, setAudioStatus ] = useState("run");

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [cameraRef, setCameraRef] = useState(null)

    const isFocused = useIsFocused();

    const unsubscribeHandler = () => {
        setScanned(false)
        setAudioStatus("run")
    }
    const unsubscribe2Handler = () => {
        setScanned(false)
        setAudioStatus("stop")
    }

    useEffect( () => {
        const getBarCodeScannerPermission = async () => {
            // const { status } = await BarCodeScanner.requestPermissionsAsync();
            
            const { status } = await Camera.requestCameraPermissionsAsync();

            if (status !== 'granted') {
                alert( "Permission is not granted!" );
                return;
            }

            setHasPermission( status === 'granted' );

        };
        getBarCodeScannerPermission();
    }, [] );

    useEffect(() => {
        // const unsubscribe = navigation.addListener( 'focus', unsubscribeHandler );
        // const unsubscribe2 = navigation.addListener( 'blur', unsubscribe2Handler );
        navigation.addListener( 'focus', unsubscribeHandler );
        navigation.addListener( 'blur', unsubscribe2Handler );
        return () => {
            // unsubscribe()
            // unsubscribe2()
            navigation.removeListener( 'focus', unsubscribeHandler );
            navigation.removeListener( 'blur', unsubscribe2Handler );
        };
    }, [navigation]);

    React.useEffect(() => {
        if( scannedData ) navigation.navigate( "LicenseBackVerifier", { frontFaceData: scannedData } )
    }, [scannedData])

    // const handleBarCodeScanned = ( { type, data } ) => {
    //     setScanned( true );
    //     if(data) {
    //         console.log( `Bar code with type ${type} and data ${data} has been scanned!` );
    //         setScannedData(data)
    //     }
    // }

    if (hasPermission === null) {
        return (<View style={styles.container}><Text>Requesting for camera permission</Text></View>);
    }
    if (hasPermission === false) {
        return (<View style={styles.container}><Text>No access to camera</Text></View>);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View
                style={{
                    marginBottom: 30,
                    width: 165,
                }}
                >
                <Text
                    style={{
                    fontSize: 16,
                    lineHeight: 30,
                    fontWeight:"800",
                    textAlign: "center"
                    }}
                >SCAN YOUR LICENSE FRONT SIDE</Text>
                </View>

                <View
                    style={{
                        flex:1,
                        width: "100%" ,
                        // width: "auto" ,
                        // minHeight: 300,
                        maxHeight: 354,
                        backgroundColor:"#222",
                        overflow:"hidden"
                    }}
                >
                    {isFocused ? (
                        <Camera style={{ flex: 1 }} type={type} ref={ref => {
                            setCameraRef(ref) ;
                        }}>
                            <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                justifyContent: 'flex-end'
                            }}>
                                {/* <TouchableOpacity
                                    style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end'
                                    }}
                                    onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                    );
                                    }}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity style={{alignSelf: 'center', marginBottom: 10}} onPress={async() => {
                                    if(cameraRef){
                                        let photo = await cameraRef.takePictureAsync( { base64:true, quality:0 } );
                                        setScanned( true );
                                        if(photo?.base64) {
                                            setScannedData(photo?.base64)
                                            // navigation.navigate( "LicenseBackVerifier", { frontFaceData: scannedData } )
                                        }
                                    }
                                }}>
                                    <View style={{ 
                                    borderWidth: 2,
                                    borderRadius:50,
                                    borderColor: 'white',
                                    height: 50,
                                    width:50,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'}}
                                    >
                                    <View style={{
                                        borderWidth: 2,
                                        borderRadius:50,
                                        borderColor: 'white',
                                        height: 40,
                                        width:40,
                                        backgroundColor: 'white'}} >
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Camera>
                    ) : null}
                        {/* <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={{...StyleSheet.absoluteFillObject, top:-180, bottom:-180 }}
                        /> */}
                </View>

                <View
                style={{
                    marginVertical: 30,
                    // width: 165,
                }}
                >
                <Text
                    style={{
                    fontSize: 15,
                    lineHeight: 15,
                    fontWeight: "800",
                    textAlign: "center"
                    }}
                >Scanning Will Happen Automatically</Text>
                </View>

                {scanned ?
                    <>
                        <Text style={{fontSize:20,color:colors.dark,fontWeight:"900", color: colors.primaryColorTrans}}>Successfully completed</Text>

                        {/* <TouchableOpacity
                            style={{
                                marginVertical: 30,
                                // borderWidth: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 10
                            }}
                            onPress={() => {
                                setScanned(false);
                                navigation.navigate("LicenseBackVerifier")
                            }}
                        >
                            <Text style={{ color: colors.primaryColor, textDecorationLine: "underline", textDecorationColor: colors.primaryColor, textTransform:"uppercase" }}>Proceed</Text>
                        </TouchableOpacity> */}
                    </>
                    :
                    <View
                        style={{
                            marginTop:20,
                            marginBottom:30
                        }}
                    >
                        <UserVoiceIcon status={audioStatus} color={ colors.primaryColor } />
                    </View>
                }

                <View style={{ width:122,height:4,backgroundColor:colors.primaryColor,borderRadius:4, marginVertical:20 }} />

            </View>

        </ScrollView>
    )
}

export default LicenseFrontCaptureScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: 'flex-start',
      paddingTop: 50,
      paddingHorizontal: 30,
      minHeight: Dimensions.get( "screen" ).height
    },
    // scanner: {
    //   flex:1,
    //   width: '100%',
    // //   maxHeight: 354,
    //   backgroundColor: '#99999975',
    //   top:-200,
    //   bottom:-200,
    // }
})