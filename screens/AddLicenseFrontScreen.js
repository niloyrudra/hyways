import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import QRCodeIcon from '../components/QRCodeIcon'

import TabScreenHeading from '../components/TabScreenHeading'
import CheckStatusIcon from '../components/CheckStatusIcon'

const dummyData = [
  { id:0, title: "License Status", value: "Verified", status: true },
  { id:1, title: "Age", value: "21 Years", status: true },
  { id:2, title: "Name", value: "Zee Zee", status: true },
  { id:3, title: "License No.", value: "123456789", status: true },
];

const AddLicenseFrontScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        
        <TabScreenHeading />

        <QRCodeIcon
          style={{
            marginTop: 25,
            marginBottom: 70
          }}
        />

        <FlatList
          data={dummyData}
          keyExtractor={(item)  => item.id }
          renderItem={({item}) => (

            <View style={styles.dataList}>

              <View
                style={{
                  flex:1,
                }}
              >
                <Text style={styles.title}>{item.title}</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems:"center",
                  justifyContent:"flex-end",
                }}
              >
                <Text style={styles.value}>{item.value}</Text>
                <CheckStatusIcon isChecked={item.status} />
              </View>

            </View>

          )}
          ListFooterComponent={
            <View style={{marginBottom:50}} />
          }
        />

      </View>
    </SafeAreaView>
  )
}

export default AddLicenseFrontScreen

const styles = StyleSheet.create({
  container:{
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  dataList: {
    flex:1,
    flexDirection:"row",
    justifyContent: "center",
    width:"100%",
    paddingVertical: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: "800"
  },
  value: {
    fontSize: 17,
    fontWeight: "500",
    marginRight: 25
  }
})