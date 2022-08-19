import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CarDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:30,
        fontWeight:"800",
        lineHeight:40
      }}>Car Detail Screen</Text>
      <Text style={{
        fontSize:20,
        fontWeight:"500",
        lineHeight:40
      }}>...Coming Soon!!!</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.navigate("BottomTabs")}
        style={{
          marginTop: 50
        }}
      />

    </View>
  )
}

export default CarDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:30
  }
})