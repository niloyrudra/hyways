import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import IconButton from '../components/IconButton';

import { auth } from '../config/firebase';

const HomeScreen = () => {

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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