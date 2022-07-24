import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    // <Stack.Navigator headerMode='none'>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
}