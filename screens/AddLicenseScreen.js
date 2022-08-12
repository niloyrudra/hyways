import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import LicenseDetail from '../components/LicenseDetail';
import StatusComponent from "../components/StatusComponent"

const AddLicenseScreen = () => {

  const [ isSunmitted, setIsSubmitted ] = useState(false)

  return (
    <View style={styles.container}>
      {
        isSunmitted ? <StatusComponent /> : <LicenseDetail/>
      }
    </View>
  )
}

export default AddLicenseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:30
  },
})