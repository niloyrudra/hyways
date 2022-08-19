import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'

// import UserVoiceIcon from "../components/UserVoiceIcon"

import colors from "../constants/colors"


const LicenseBackCaptureScreen = ( { navigation } ) => {
    
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ scanned, setScanned ] = useState(false);

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
        }
    }

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
                    width: 273 // 165,
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
                {/* <UserVoiceIcon /> */}
                </View>

                {/* <View style={{ width:122,height:4,backgroundColor:colors.primaryColor,borderRadius:4, marginVertical:20 }} /> */}

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
                            onPress={() => navigation.navigate("LicenseDetailForm")}
                        >
                            <Text>Proceed</Text>
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
      justifyContent: 'center',
      padding: 30
    },
    scanner: {
      flex:1,
      width: '100%',
      maxHeight: 354,
      backgroundColor: '#99999975'
    }
})