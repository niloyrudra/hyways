import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import AddLicenseScreen from "../screens/AddLicenseScreen"
import AddLicenseFrontScreen from "../screens/AddLicenseFrontScreen"
import AddLicenseBackScreen from "../screens/AddLicenseBackScreen"
import LicenseListScreen from "../screens/LicenseListScreen"
// import LicenseDisplayScreen from '../screens/LicenseDisplayScreen'


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


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
              onPress={ () => navigation.navigate( "Home" ) }
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
                // tabBarStyle: { display: "none" },
            }}
        />
        <Tab.Screen name="ScannerDetail" component={AddLicenseFrontScreen} options={{
                tabBarLabel: "Verify Now",
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
        <Tab.Screen name="Status" component={AddLicenseScreen} options={{
                tabBarLabel: "Status",
                tabBarIcon: ( { focused } ) => ( <StatusTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
                tabBarActiveTintColor: colors.primaryColor,
                tabBarInactiveTintColor: colors.colorWhite,
                tabBarIconStyle:{
                    // marginTop:-10,
                    marginBottom:10
                },
                tabBarItemStyle:{
                    paddingVertical:10
                },
                tabBarLabelStyle: {
                  fontWeight: "800"
                }
            }}
         />
    </Tab.Navigator>
  )
}

export default TabNavigator