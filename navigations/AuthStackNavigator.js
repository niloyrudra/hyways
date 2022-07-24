import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import SignInScreen from "../screens/Authentication/SignInScreen";
import SignUpScreen from "../screens/Authentication/SignUpScreen";
import ForgotPasswordScreen from "../screens/Authentication/ForgotPasswordScreen"
import OTPScreen from "../screens/Authentication/OTPScreen"

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
        initialRouteName='SignIn'
        screenOptions={{
            headerTintColor: "#ffffff",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: 15,
                fontWeight: "800"
            },
            headerStyle: {
                backgroundColor: '#00B906'
            },
            headerBackTitleVisible: true
        }}
    >
        <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ title: "Login" }} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ title: "Create An Account" }} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <AuthStack.Screen name="OTP" component={OTPScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator