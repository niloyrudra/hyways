import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import LicenseDetail from '../components/LicenseDetail';
import StatusComponent from "../components/StatusComponent"

const AddLicenseScreen = () => {

  const [ isSunmitted, setIsSubmitted ] = useState(true)

  return (
    <>
      {
        isSunmitted ? <StatusComponent /> : <LicenseDetail/>
      }
    </>
  )
}

export default AddLicenseScreen