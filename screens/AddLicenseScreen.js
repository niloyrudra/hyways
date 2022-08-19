import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import LicenseDetail from '../components/LicenseDetail';
import StatusComponent from "./StatusScreen"

const AddLicenseScreen = () => {

  const [ isSubmitted, setIsSubmitted ] = useState(false)
  const [ data, setData ] = useState(null)

  React.useEffect(() => {
    if(data?.firstName) setIsSubmitted(true)
    console.log(data)
    return () => {
      setIsSubmitted(false)
    }
  }, [data]);

  return (
    <>
      {
        isSubmitted ? <StatusComponent data={data} /> : <LicenseDetail setData={setData} />
      }
    </>
  )
}

export default AddLicenseScreen