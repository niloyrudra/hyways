import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

// Firebase
// import Firebase from '../config/firebase';
import { auth } from '../config/firebase';
import { AuthenticatedUserContext } from './AuthencatedUserProvider';
// import {AuthenticatedUserProvider} from './AuthencatedUserProvider';

// Navigators
import AuthStackNavigator from './AuthStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';


// const auth = Firebase.auth();

const AppNavigator = () => {
  // const { user, setUser } = useContext(AuthenticatedUserContext);
  const [ user, setUser ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
      try {
        await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer>
    {
      user ?
        <HomeStackNavigator/>
        :
        <AuthStackNavigator />
    }
    </NavigationContainer>
  )
}

export default AppNavigator