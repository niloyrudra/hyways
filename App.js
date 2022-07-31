import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

import { AuthenticatedUserProvider } from './navigations/AuthencatedUserProvider';


import AppNavigator from "./navigations/AppNavigator"

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigator />
      </SafeAreaProvider>
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
