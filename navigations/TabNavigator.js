import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import AddLicenseScreen from "../screens/AddLicenseScreen"
import AddLicenseFrontScreen from "../screens/AddLicenseFrontScreen"
import AddLicenseBackScreen from "../screens/AddLicenseBackScreen"
import LicenseListScreen from "../screens/LicenseListScreen"
import LicenseDisplayScreen from '../screens/LicenseDisplayScreen'

import LicenseVerifyingNavigator from './LicenseVerifyingNavigator'

// Components
import MenuIcon from '../components/MenuIcon'
import CameraIcon from "../components/CameraIcon"

// Contants
import colors from '../constants/colors'
// Tab Icons
import HomeTabIcon from '../components/HomeTabIcon'
import QRTabIcon from '../components/QRTabIcon'
import BXBarCodeTabIcon from '../components/BXBarCodeTabIcon'
import StatusTabIcon from '../components/StatusTabIcon'
import BackButtonIcon from '../components/BackButtonIcon'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  // const getTitle = ( {name} ) => {

  //   switch( name ) {
  //     case "CardList":
  //       name = "Home"
  //       break;
  //     case "LicenseDisplay":
  //       name = "Valid"
  //       break;
  //     case "ScannerDetail":
  //       name = "Verify Another License"
  //       break;
  //     case "Scanner":
  //       name = "Verify Another License"
  //       break;
  //     case "Status":
  //       name = "Verify Another License"
  //       break;
  //   }

  //   return name ? name : "";
  // };

  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarStyle:{
            height:70, // 58
            alignItems: "center",
            justifyContent: "center",
            paddingVertical:20,
            backgroundColor: colors.colorWhite
        },
        drawerPosition:"right",
        drawerStyle:{
          width: '65%',
          backgroundColor: colors.primaryColorTrans,
        },
        // headerTitle: getTitle(route),
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
          if(route.name === "CardList") return (
            <TouchableOpacity
              style={{
                marginLeft: 36
              }}
              onPress={ () => navigation.navigate( "CardList" ) }
            >
              <Image
                source={require( "../assets/logo/Hyways-white.png" )}
                style={{
                  width: 100,
                  height: 43,
                }}
              />
            </TouchableOpacity>
          );

          if(route.name === "LicenseDisplay") return (
            <TouchableOpacity
              style={{
                marginLeft: 36
              }}
              // onPress={ () => navigation.navigate( "Home" ) }
              onPress={ () => navigation.goBack() }
            >
              <BackButtonIcon/>
            </TouchableOpacity>
          );

          return (
            <View style={{flex:1}} />
          );
        },
        headerRight: () => {

          if(route.name === "CardList") return (
            <TouchableOpacity
              style={{
                marginRight: 36
              }}
              onPress={() => navigation.toggleDrawer() }
            >
              <MenuIcon/>
            </TouchableOpacity>
          );
          if(route.name === "LicenseDisplay") return (
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
        }
      })}
    >
      <Tab.Screen name="CardList" component={LicenseListScreen} options={{
          title: "Home",
          headerTitle:"Home",
          tabBarLabel: "Home",
          // tabBarShowLabel: false,
          tabBarIcon: ( { focused } ) => ( <HomeTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
          tabBarActiveTintColor: colors.primaryColor,
          tabBarInactiveTintColor: colors.colorWhite,
          tabBarItemStyle: {
            paddingVertical:10
          },
          tabBarLabelStyle: {
            fontWeight: "800"
          }
        }}
      />

      <Tab.Screen name="ScannerDetail" component={AddLicenseFrontScreen} options={{
          tabBarLabel: "Verify Now",
          headerTitle:"Verify Another License",
          // tabBarShowLabel: false,
          // tabBarShowLabel:{},
          tabBarIcon: ( { focused } ) => ( <QRTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
          tabBarActiveTintColor: colors.primaryColor,
          tabBarInactiveTintColor: colors.colorWhite,
          tabBarItemStyle:{
            paddingVertical:10
          },
          tabBarLabelStyle: {
            fontWeight: "800"
          }
        }}
      />

      <Tab.Screen name="Scanner" component={AddLicenseBackScreen} options={{
          tabBarLabel: "Scan",
          headerTitle:"Verify Another License",
          // tabBarShowLabel: false,
          tabBarIcon: ( { focused } ) => ( <BXBarCodeTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
          tabBarActiveTintColor: colors.primaryColor,
          tabBarInactiveTintColor: colors.colorWhite,
          tabBarItemStyle:{
            paddingVertical:10
          },
          tabBarLabelStyle: {
            fontWeight: "800"
          }
        }}
      />

      <Tab.Screen name="VerificationStatus" component={LicenseVerifyingNavigator} options={{
          tabBarLabel: "Status",
          headerTitle:"Verify Another License",
          headerShown:false,
          tabBarIcon: ( { focused } ) => ( <StatusTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
          tabBarActiveTintColor: colors.primaryColor,
          tabBarInactiveTintColor: colors.colorWhite,
          tabBarIconStyle:{
            marginBottom:10
          },
          tabBarItemStyle:{
            paddingVertical:10
          },
          tabBarLabelStyle: {
            fontWeight: "800"
          },
        }}
      />
      {/* <Tab.Screen name="Status" component={AddLicenseScreen} options={{
          tabBarLabel: "Status",
          headerTitle:"Verify Another License",
          tabBarIcon: ( { focused } ) => ( <StatusTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
          tabBarActiveTintColor: colors.primaryColor,
          tabBarInactiveTintColor: colors.colorWhite,
          tabBarIconStyle:{
            marginBottom:10
          },
          tabBarItemStyle:{
            paddingVertical:10
          },
          tabBarLabelStyle: {
            fontWeight: "800"
          },
        }}
      /> */}

      <Tab.Screen name="LicenseDisplay" component={LicenseDisplayScreen} options={{
          headerTitle:"Valid",
          tabBarItemStyle:{
            display: "none"
          },
          tabBarStyle: { display: "none" },
        }}
      />

    </Tab.Navigator>
  )
}

export default TabNavigator