import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { BarCodeScanner } from 'expo-barcode-scanner'

// import UserVoiceIcon from "../components/UserVoiceIcon"
import LicenseCaptureSection from '../components/LicenseCaptureSection';
import LicenseDetail from '../components/LicenseDetail';

import colors from "../constants/colors"

const AddLicenseScreen = () => {

  return (
    <View style={styles.container}>
      {/* <LicenseCaptureSection/> */}
      <LicenseDetail/>
    </View>
  )
}

// {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

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