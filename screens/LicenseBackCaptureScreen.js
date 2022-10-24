import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { BarCodeScanner } from 'expo-barcode-scanner'
import { Camera,CameraType } from 'expo-camera'

import { useIsFocused } from '@react-navigation/native';

import colors from "../constants/colors"


const LicenseBackCaptureScreen = ( { navigation, route } ) => {
    
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ scanned, setScanned ] = useState(false);
    const [ frontFaceData, setFrontFaceData ] = useState( route.params.frontFaceData );
    const [ backFaceData, setBackFaceData ] = useState( null );
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [cameraRef, setCameraRef] = useState(null);
    const [isPreview, setIsPreview] = useState(false);

    const isFocused = useIsFocused();
    
    const cancelPreview = async () => {
        await cameraRef.resumePreview();
        setIsPreview(false);
    };

    useEffect( () => {
        const getBarCodeScannerPermission = async () => {
            // const { status } = await BarCodeScanner.requestPermissionsAsync();
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission( status === 'granted' );
        };
        getBarCodeScannerPermission();
    }, [] );

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setScanned(false)
        });
    
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        if( backFaceData ) {
            cancelPreview();
            navigation.navigate( "LicenseDetailForm", { backFaceData: backFaceData, frontFaceData: frontFaceData } );
        }
    }, [backFaceData])
    
    // const handleBarCodeScanned = ( { type, data } ) => {
    //     setScanned( true );
    //     if(data) {
    //         console.log( `Bar code with type ${type} and data ${data} has been scanned!` );
    //         setBackFaceData(data)
    //     }
    // }

    if (hasPermission === null) {
        return (<Text>Requesting for camera permission</Text>);
    }
    if (hasPermission === false) {
        return (<Text>No access to camera</Text>);
    }

    

    return (
        <ScrollView>
            <View style={styles.container}>

                <View
                style={{
                    marginBottom: 30,
                    width: 165 // 273 // 165,
                }}
                >
                <Text
                    style={{
                    fontSize: 16,
                    lineHeight: 30,
                    fontWeight:"800",
                    textAlign: "center"
                    }}
                >Scan Your Code From Another Device</Text>
                </View>

                <View
                    style={{
                        flex:1,
                        width: "100%" ,
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
                                <TouchableOpacity style={{alignSelf: 'center', marginBottom: 10 }} onPress={async() => {
                                    if( cameraRef ){
                                        let photo = await cameraRef.takePictureAsync( { base64:true, quality:0.7 } );
                                        setScanned( true );
                                        const source = photo.base64;

                                        if (source) {
                                            await cameraRef.pausePreview();
                                            setIsPreview(true);
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

                {scanned &&
                <>
                    <Text style={{fontSize:20,color:colors.dark,fontWeight:"900", color: colors.primaryColorTrans}}>Successfully completed</Text>
                    <TouchableOpacity
                        style={{
                            marginVertical: 30,
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 10
                        }}
                        onPress={() => {
                            setScanned(false);
                            cancelPreview();
                            navigation.navigate( "LicenseDetailForm", { backFaceData: backFaceData, frontFaceData: frontFaceData } );
                        }}
                    >
                        <Text style={{ color: colors.primaryColor, textDecorationLine: "underline", textDecorationColor: colors.primaryColor, textTransform:"uppercase" }}>Proceed</Text>
                    </TouchableOpacity>
                </>
                }

            </View>

        </ScrollView>
    )
}

export default LicenseBackCaptureScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 50,
      paddingHorizontal: 30,
      minHeight: Dimensions.get( "screen" ).height
    },
    // scanner: {
    //   flex:1,
    //   width: '100%',
    //   maxHeight: 354,
    //   backgroundColor: '#99999975',
    //   overflow: "hidden"
    // }
})