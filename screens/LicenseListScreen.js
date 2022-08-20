import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import WelcomeTextInline from "../components/WelcomeTextInline"

import colors from '../constants/colors'
import LicenseListCard from '../components/LicenseListCard';

const cardList = [
  {
    id:0,
    cardTitle: "Own Card",
    cardImg: require( "../assets/license/real_id_own.png" )
  },
  {
    id:1,
    cardTitle: "Family Cards",
    cardImg: require("../assets/license/real_id_family.png")
  },
];

const LicenseListScreen = ( { navigation } ) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
            data={cardList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id }
            ListHeaderComponent={
              <WelcomeTextInline
                style={{
                  justifyContent:"flex-start",
                  alignItems:"flex-start",
                  marginTop:36
                }}
              />
            }
            renderItem={({item}) => (
               
              <LicenseListCard item={item} navigation={navigation} />
                    
            )}
            ListFooterComponent={() => (
              <View
                style={{
                  flex:1,
                  alignItems:"center",
                  marginBottom:50
                }}
              >
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => navigation.navigate("VerificationStatus")}
                >
                    <Text style={styles.submitText}>Add License</Text>
                </TouchableOpacity>
              </View>
            )}
        />
      </View>
    </SafeAreaView>
  )
}

export default LicenseListScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:36,
  },
  submitBtn: {
      // width: "70%",
      width: 297,
      height:45,
      marginTop:25,
      justifyContent:"center",
      alignItems:"center",   
      borderRadius: 35,
      backgroundColor: colors.primaryColor,
      
      shadowOffset: {width: -2,height: 4},
      shadowColor: colors.shadowClr,
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 5,
  },
  submitText: {
      color: colors.colorWhite,
      fontWeight: "900",
      fontSize: 17
  }
})