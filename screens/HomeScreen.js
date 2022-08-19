import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StackActions } from '@react-navigation/native';

import WelcomeText from "../components/WelcomeText";
// import SyncTelematicsText from "../components/SyncTelematicsText"

// import { auth, db } from '../config/firebase';
import colors from '../constants/colors';

const HomeScreen = ( {navigation} ) => {

  // const handleSignOut = async () => {
  //   try {
  //     await auth.signOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>

      <View style={{marginBottom:40}}>
        <WelcomeText/>
      </View>

      {/* <View style={{marginBottom:50}}>
        <SyncTelematicsText/>
      </View> */}

      <View
        style={{
          marginBottom:50,
          justifyContent:'center',
          alignItems:"center"
        }}
      >
        <Text
          style={{
            fontSize:35,
            fontWeight:"400",
            textAlign:"center",
            lineHeight: 56.35,
            marginBottom:25
          }}
        >Please sync with Hyways Telematics</Text>
        <Image
          style={{
            width:170,
            height:250
          }}
          source={require( "../assets/telematics-device-2.png" )}
        />
        {/* <Image
          style={{
            // flex:1,
            width:330,
            height:260
          }}
          source={require( "../assets/telematics.png" )}
        /> */}
      </View>

      <TouchableOpacity
        style={{
          width: 196,
          height: 49,          
          borderRadius: 35,
          backgroundColor: colors.primaryColor,
          justifyContent: "center",
          alignItems: "center",
          
          shadowOffset: {width: -2,height: 4},
          shadowColor: colors.shadowClr,
          shadowOpacity: 0.25,
          shadowRadius: 3,
          elevation: 5,

        }}

        onPress={() => {
          // navigation.replace("BottomTabs")

          navigation.navigate("BottomTabs")

          // navigation.reset({
          //   index:0,
          //   routes: [{ name: "BottomTabs" }]
          // })
          
          // navigation.dispatch(
          //   StackActions.replace('BottomTabs', {
          //     name: 'Home',
          //   })
          // );

        }}
      >
        <Text style={{fontSize:24,fontWeight:"bold",color:colors.colorWhite}}>Click Here</Text>
      </TouchableOpacity>


      {/* <IconButton
          name='logout'
          size={24}
          color='#000'
          onPress={handleSignOut}
        /> */}

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical:30
  },
})