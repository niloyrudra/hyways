import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import LicenseFrontCaptureScreen from '../screens/LicenseFrontCaptureScreen'
import LicenseBackCaptureScreen from "../screens/LicenseBackCaptureScreen"
import LicenseDetailFormScreen from "../screens/LicenseDetailFormScreen"
import StatusScreen from '../screens/StatusScreen'

// Components
import BackButtonIcon from '../components/BackButtonIcon'
import CameraIcon from '../components/CameraIcon'

// Constants
import colors from '../constants/colors'

// const Stack = createNativeStackNavigator()
const Stack = createStackNavigator()

const LicenseVerifyingNavigator = () => {

    const getTitle = ( {name} ) => {

        switch( name ) {
            case "LicenseFrontVerifier":
            case "LicenseBackVerifier":
            case "LicenseDetailForm":
                name = "Verify Another License"
                break;

            case "Status":
                name = "License Status"
                break;
        }

        return name ? name : "Verify Another License";
    };


  return (
    <Stack.Navigator
        screenOptions={({navigation, route }) => ({
            headerTitle: getTitle(route),
            headerStyle: {
                backgroundColor: colors.primaryColor,
                height:80
            },
            headerTintColor: colors.colorWhite,
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft:() => {
                if( route.name == "Status" || route.name == "LicenseFrontVerifier" ) return (<View style={{ flex:1 }} />);

                return (
                    
                    <TouchableOpacity
                        style={{
                            marginLeft: 36
                        }}
                        onPress={ () => navigation.goBack() }
                    >
                        <BackButtonIcon/>
                    </TouchableOpacity>
                );
            },
            headerRight: () => {

                if(route.name === "Status") return (
                    <View style={{flex:1}}/>
                );

                return(
                    <TouchableOpacity
                        style={{
                            marginRight: 36
                        }}
                        onPress={() => console.log("Camera") }
                    >
                        <CameraIcon/>
                    </TouchableOpacity>
                )
            },
        })}
        initialRouteName= "LicenseFrontVerifier"
    >

      <Stack.Screen name="LicenseFrontVerifier" component={LicenseFrontCaptureScreen} />
      <Stack.Screen name="LicenseBackVerifier" component={LicenseBackCaptureScreen} />
      <Stack.Screen name="LicenseDetailForm" component={LicenseDetailFormScreen} />
      <Stack.Screen name="Status" component={StatusScreen} />

    </Stack.Navigator>
  )
}

export default LicenseVerifyingNavigator

const styles = StyleSheet.create({})