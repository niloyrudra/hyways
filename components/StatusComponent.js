import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import CheckedIcon from './CheckedIcon'
import DefaultUserAvatar from './DefaultUserAvatar'
import CircleAround from './CircleAround'
import TabScreenHeading from './TabScreenHeading'

const StatusComponent = () => {
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
          <Text style={styles.subHeading}>April 21, 2022</Text>
        </View>
        <View style={{
          marginVertical: 5
        }}>
          <Text style={styles.paragraph}>Digital License Expiration Date</Text>
        </View>

        <View style={{
          marginVertical: 5
        }}>
          <Text style={styles.subHeading}>April 21, 2023</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default StatusComponent

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