import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import WelcomeTextInline from "../components/WelcomeTextInline"
import CardItemOwn from "../components/CardItemOwn"
import CardItemFamily from '../components/CardItemFamily'

const cardList = [
  {
    id:0,
    cardTitle: "Own Card",
    cardImg: ''
  },
  {
    id:1,
    cardTitle: "Family Cards",
    cardImg: ""
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
                  alignItems:"flex-start"
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

                <TouchableOpacity>
                  { item.id == 0 ? <CardItemOwn style={{marginLeft:-40, marginBottom:-60, marginTop:-10}} /> : <CardItemFamily style={{marginTop: 30}} /> }
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
    // flex: 1,
    // justifyContent:"center",
    // alignItems: 'center'
    padding:30
  },
  title: {
      fontSize:20,
      fontWeight:"700"
  },
  submitBtn:
  {
      // width: "70%",
      width: 297,
      borderRadius:30,
      height:45,
      alignItems:"center",
      justifyContent:"center",
      marginTop:25,
      backgroundColor: "#00B906"
  },
  submitText: {
      color:"#ffffff",
      fontWeight: "900",
      fontSize: 17
  }
})