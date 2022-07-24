import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import IconButton from '../components/IconButton';

import { auth, db } from '../config/firebase';

const HomeScreen = () => {

  console.log(db)

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
    <View style={{marginBottom:25}}>
      <Text>HomeScreen</Text>
    </View>
      <IconButton
          name='logout'
          size={24}
          color='#000'
          onPress={handleSignOut}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})