import { StyleSheet, Text, View, Image, Switch, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CardListScreen from '../screens/LicenseListScreen';
import AddLicenseScreen from '../screens/AddLicenseScreen';

import TabNavigator from './TabNavigator';

// Components
import MenuIcon from '../components/MenuIcon';
import CameraIcon from '../components/CameraIcon';

// Constants
import colors from "../constants/colors"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      drawerContent={ props => <DrawerContent { ...props } /> }
      // drawerContentOptions={{
      // }} // Deprecated
      screenOptions={({route, navigation}) => ({
        // drawerType:"back",

        // overlayColor:"red",
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
          <TouchableOpacity
            style={{
              // paddingVertical: 45,
              marginLeft: 36
            }}
            onPress={ () => navigation.navigate( "Home" ) }
          >
            {/* <HywaysWhite /> */}
            <Image
              source={require( "../assets/logo/Hyways-white.png" )}
              style={{
                width: 100,
                height: 43,
              }}
            />
          </TouchableOpacity>
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
      <Drawer.Screen name="Home" component={HomeScreen}
        options={{title:"Home"}}
      />
      <Drawer.Screen name="LicenseList" component={CardListScreen}
        options={{title:"License List"}}
      />
      <Drawer.Screen name="AddLicense" component={AddLicenseScreen}
        options={{
          title:"Add License",
          headerLeft:() => {},
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 36
              }}
              onPress={() => console.log("Camera")}
            >
              <CameraIcon/>
            </TouchableOpacity>
          )
        }}
      />

      <Drawer.Screen name="BottomTabs" component={TabNavigator} options={{headerShown:false}} />

      {/* <Drawer.Screen name="AddLicenseFront" component={AddLicenseFrontScreen}
        options={{title:"License Frontface"}}
      />
      <Drawer.Screen name="AddLicenseBack" component={AddLicenseBackScreen}
        options={{title:"License Backface"}}
      />
      <Drawer.Screen name="AddLicenseDetail" component={AddLicenseDetailScreen}
        options={{title:"Add License Detail"}}
      />
      <Drawer.Screen name="CarDetail" component={CarDetailScreen}
        options={{title:"Car Detail"}}
      />
      <Drawer.Screen name="VerifyLicense" component={VerifyLicenseScreen}
        options={{title:"Verification"}}
      />
      <Drawer.Screen name="ShowValidity" component={ShowValidityScreen}
        options={{title:"Valid"}}
      />
      <Drawer.Screen name="Status" component={StatusScreen}
        options={{title:"Status"}}
      /> */}
    </Drawer.Navigator>
  )
}

const DrawerContent = ( { navigation } ) => {
  const [ isEnabled, setIsEnabled ] = React.useState(false)
  const [ isSearchTerm, setIsSearchTerm ] = React.useState('')
  return (
      <View style={{flex:1}}>
      
        <View
          style={{
            alignItems:"flex-end",
            position:"relative"
            // alignItems:"center"
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={(term) => setIsSearchTerm(term)}
            value={isSearchTerm}
            enablesReturnKeyAutomatically={true}
            // placeholder="useless placeholder"
            // keyboardType="numeric"
          />

          <Image
            source={ require( '../assets/icons/align-left.png' ) }
            style={{
              width:25,
              height:25.33,
              position:"absolute",
              top:30,
              right:45
            }}
          />

        </View>

        <CustomDrawerItem label="Sync with a telematic" onPress={() => navigation.navigate("Home")} />

        <CustomDrawerItem label="Add More Vehicle" onPress={() => navigation.navigate("AddLicense")} />

        <CustomDrawerItem label="Track Your Car" onPress={() => navigation.navigate("CarDetail")} />

        <CustomDrawerItem label="Disconnect Telematic" onPress={() => navigation.navigate("Home")} />

        {/* <DrawerItem
          label="Home"
          labelStyle={styles.drawerLabel}
          onPress={()=> navigation.navigate("Home")}
        />*/}

        <TouchableOpacity
          style={{...styles.drawerLabel,justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}
        >
          <View style={{marginBottom:0}}>

            <Text
              style={{color:colors.colorWhite,fontWeight:"bold"}}
            >Phone/Email Notification</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "rgba(6, 75, 9, 1)" }}
            thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={ value => setIsEnabled(value)}
            value={isEnabled}
            style={{width:30}}
          />
        </TouchableOpacity>

      </View>
  )
}

const CustomDrawerItem = (props) => {
  return (
    <TouchableOpacity
      style={{...styles.drawerLabel,justifyContent:"center"}}
      onPress={props.onPress}
    >
      <Text
        style={{color:colors.colorWhite,fontWeight:"bold"}}
      >{props.label}</Text>
    </TouchableOpacity>
  );
}

export default DrawerNavigator

const styles = StyleSheet.create({
  drawerLabel:{
    color: colors.colorWhite,
    backgroundColor: colors.labelBg,
    paddingHorizontal:20,
    margin:0,
    width:"100%",
    height:45,
    marginBottom: 4,
  },
  input: {
    // width: 150,
    width: 200,
    // flex:1,
    height: 44,
    marginTop: 20,
    marginBottom: 60,
    marginHorizontal:36,
    backgroundColor:colors.colorWhite,
    // borderWidth: 1,
    padding: 10,
    paddingRight:44,
    borderRadius:5
  },
})