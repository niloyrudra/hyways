import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { AuthenticatedUserProvider } from './navigations/AuthencatedUserProvider';


import AppNavigator from "./navigations/AppNavigator"

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <AppNavigator />
    </AuthenticatedUserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
