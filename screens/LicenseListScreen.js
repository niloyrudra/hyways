import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import WelcomeTextInline from "../components/WelcomeTextInline"

import colors from '../constants/colors'

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
               
              <View
                  style={{marginVertical:30}}
              >
                  <Text 
                      style={styles.title}
                  >
                      {item.cardTitle}
                  </Text>

                <TouchableOpacity
                  style={{
                    width: 354,
                    height: 222,
                    marginTop: 30,
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                  onPress={ () => navigation.navigate("LicenseDisplay", { item: item }) }
                >
                  <Image
                    style={{
                      width:332,
                      height:210
                    }}
                    source={item.cardImg}
                  />

                  <View
                    style={{
                      flex:1,
                      width:"100%",
                      height:"100%",
                      backgroundColor: "#000",
                      opacity: 0.4,
                      position:"absolute",
                      borderRadius: 30
                    }}
                  />
                  
                  <View
                    style={{
                      position:"absolute",
                      zIndex:2,
                      justifyContent:"center",
                      alignItems: "center"
                    }}
                  >
                    <Text style={{ color: colors.colorWhite, opacity:1, fontWeight:"800" }}>Tap to view</Text>
                  </View>

                </TouchableOpacity>
              </View>
                    
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
                    onPress={() => navigation.navigate("Status")}
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
  title: {
      fontSize:20,
      fontWeight:"700"
  },
  submitBtn:
  {
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