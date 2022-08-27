import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import CheckedIcon from '../components/CheckedIcon'
import DefaultUserAvatar from '../components/DefaultUserAvatar'
import CircleAround from '../components/CircleAround'
import TabScreenHeading from '../components/TabScreenHeading'

const StatusScreen = ( { route } ) => {

  const [ data, setData ] = React.useState( route.params )

  return (
    <SafeAreaView>
      <View style={styles.container}>
        
        <TabScreenHeading />

        <View
          style={{
            marginVertical: 25
          }}
        >
          <CircleAround />
          <DefaultUserAvatar
            style={{
              position:"absolute",
              top: 12,
              left: 12,
            }}
          />
        </View>

        <CheckedIcon />

        <View style={{
          marginVertical: 5
        }}>
          <Text style={styles.heading}>Successful</Text>
        </View>
        <View style={{
          marginVertical: 5
        }}>
          <Text style={styles.paragraph}>Purchased Date</Text>
        </View>

        <View style={{
          marginVertical: 5
        }}>
          <Text style={styles.subHeading}>{data?.year ? data?.year : "---" }</Text>
        </View>
        <View style={{
          marginVertical: 5
        }}>
          <Text style={styles.paragraph}>Digital License Expiration Date</Text>
        </View>

        <View style={{
          marginVertical: 5
        }}>
          <Text style={styles.subHeading}>{data?.expirationDate ? data?.expirationDate : "---" }</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default StatusScreen

const styles = StyleSheet.create({
  container:{
    // flex:1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  heading:{
    fontSize: 17,
    fontWeight: '800'
  },
  subHeading:{
    fontSize: 13,
    fontWeight: '800'
  },
  paragraph:{
    fontSize: 13,
    fontWeight: '500'
  }
})