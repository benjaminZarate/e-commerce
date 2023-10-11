import { StyleSheet, Text, View } from 'react-native'
import Search from '../Components/Search'
import Products from './Products'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header';

const Home = ({navigation}) => {
  const [text, setText] = useState(null)
  return (
    <View>
      <Search text={text} setText={setText}/>
      <Products navigation ={navigation} text={text} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})