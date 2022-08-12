import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabScreenHeading = () => {
  return (
    <View style={{
        marginVertical: 40
      }}>
        <Text style={styles.breadcum}>Hyways | Verify You</Text>
    </View>
  )
}

export default TabScreenHeading

const styles = StyleSheet.create({
    breadcum:{
        fontSize: 15,
        fontWeight: '800',
    },
})