import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name = "login" component={Login}/>
      <Stack.Screen name = "register" component={Register}/>
    </Stack.Navigator>
  )
}

export default AuthNav

const styles = StyleSheet.create({})