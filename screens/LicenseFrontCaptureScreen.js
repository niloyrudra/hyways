import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'

// Components
import UserVoiceIcon from "../components/UserVoiceIcon"

// Constants
import colors from "../constants/colors"

const LicenseFrontCaptureScreen = ( { navigation } ) => {
    
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ scanned, setScanned ] = useState(false);
    const [ scannedData, setScannedData ] = useState(null);
    const [ audioStatus, setAudioStatus ] = useState("run");

    const unsubscribeHandler = () => {
        setScanned(false)
        setAudioStatus("run")
    }
    const unsubscribe2Handler = () => {
        setAudioStatus("stop")
    }

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

    useEffect( () => {
        
        const getBarCodeScannerPermission = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission( status === 'granted' );
        };
        getBarCodeScannerPermission();

    }, [] );

    const handleBarCodeScanned = ( { type, data } ) => {
        if(data) {
            setScanned( true );
            console.log( `Bar code with type ${type} and data ${data} has been scanned!` );
            setScannedData(data)
        }
    }

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
                        minHeight: 300,
                        backgroundColor:"#222",
                        overflow:"hidden"
                    }}
                >

                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{...StyleSheet.absoluteFillObject, top:-180, bottom:-180 }}
                        // style={styles.scanner}
                    />
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

                <View
                style={{
                    marginTop:20,
                    marginBottom:30
                }}
                >
                    {/* <UserVoiceIcon isScanned={scanned ? true : false} color={ scanned ? colors.primaryColor : colors.inActiveColor } /> */}
                    <UserVoiceIcon status={audioStatus} color={ colors.primaryColor } />
                </View>

                <View style={{ width:122,height:4,backgroundColor:colors.primaryColor,borderRadius:4, marginVertical:20 }} />

                {scanned &&
                    <>
                        <Text style={{fontSize:15,color:colors.dark,fontWeight:"800"}}>Successfully completed</Text>

                        <TouchableOpacity
                            style={{
                                marginVertical: 30,
                                borderWidth: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 10
                            }}
                            onPress={() => navigation.navigate("LicenseBackVerifier")}
                        >
                            <Text>Proceed</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>

        </ScrollView>
    )
}

export default LicenseFrontCaptureScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30
    },
    scanner: {
      flex:1,
      width: '100%',
    //   maxHeight: 354,
      backgroundColor: '#99999975',
      top:-200,
      bottom:-200,
    }
})