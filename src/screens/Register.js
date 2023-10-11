import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { firebase_auth } from '../firebase/firebaseAuth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Register = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const response = await createUserWithEmailAndPassword(firebase_auth, email, password);
            navigation.navigate("Login");
        } catch (e) {
            console.log(e);
        }
    }

  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})