import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import IconButton from '../components/IconButton';

import WelcomeText from "../components/WelcomeText";
import SyncTelematicsText from "../components/SyncTelematicsText"

import { auth, db } from '../config/firebase';
import colors from '../constants/colors';

const HomeScreen = ( {navigation} ) => {

  // console.log(navigation)

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>

      <View style={{marginBottom:50}}>
        <WelcomeText/>
      </View>

      <View style={{marginBottom:50}}>
        <SyncTelematicsText/>
      </View>

      <TouchableOpacity
        style={{
          width:196,
          height:49,          
          borderRadius: 35,
          backgroundColor:colors.primaryColor,
          justifyContent:"center",
          alignItems:"center"
        }}
        onPress={() => navigation.navigate("AddLicense") }
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