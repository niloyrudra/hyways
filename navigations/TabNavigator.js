import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import AddLicenseScreen from "../screens/AddLicenseScreen"
import AddLicenseFrontScreen from "../screens/AddLicenseFrontScreen"
import AddLicenseBackScreen from "../screens/AddLicenseBackScreen"
import StatusScreen from "../screens/StatusScreen"

// Components
import MenuIcon from '../components/MenuIcon'

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
            paddingVertical:20
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
        headerLeft:() => (
          <View style={{flex:1}} />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{
              // paddingVertical: 45,
              marginRight: 36
            }}
            onPress={() => navigation.toggleDrawer() }
          >
            <MenuIcon/>
          </TouchableOpacity>
        )
      })}
    >
        <Tab.Screen name="AddDetail" component={AddLicenseScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ( { focused } ) => ( <HomeTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
                tabBarActiveTintColor: colors.primaryColor,
                tabBarItemStyle:{
                    paddingVertical:10
                }
            }}
        />
        <Tab.Screen name="ScannerDetail" component={AddLicenseFrontScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ( { focused } ) => ( <QRTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
                tabBarActiveTintColor: colors.primaryColor,
                tabBarItemStyle:{
                    paddingVertical:10
                }
            }}
         />
        <Tab.Screen name="Scanner" component={AddLicenseBackScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ( { focused } ) => ( <BXBarCodeTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
                tabBarActiveTintColor: colors.primaryColor,
                tabBarItemStyle:{
                    paddingVertical:10
                }
            }}
         />
        <Tab.Screen name="Status" component={StatusScreen} options={{
                tabBarLabel: "Status",
                tabBarIcon: ( { focused } ) => ( <StatusTabIcon color={ focused ? colors.primaryColor : colors.inActiveColor } opacityVal={ focused ? 1 : 0.5 } /> ),
                tabBarActiveTintColor: colors.primaryColor,
                tabBarIconStyle:{
                    // marginTop:-10,
                    marginBottom:10
                },
                tabBarItemStyle:{
                    paddingVertical:10
                }
            }}
         />
    </Tab.Navigator>
  )
}

export default TabNavigator