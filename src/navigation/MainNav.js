import { StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './RootNavigation'
import AuthNav from './AuthNav'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TabNav from './TabNav'

const MainNav = () => {
  const [checkedUser, setCheckedUser] = useState(null)
    const user = useSelector(state => state.authSlice.user);

    useEffect(() => {
      const checkUser = async () => {
        try
        {
          const userEmail = await AsyncStorage.getItem("userEmail");
          userEmail ? setCheckedUser(userEmail) : setCheckedUser(user);
        }catch(e)
        {
          console.log(e);
        }
      }
      checkUser();
    },[user])
    
  return (
    <NavigationContainer>
        {checkedUser ? <TabNav/> : <AuthNav/>}
    </NavigationContainer>
  )
}

export default MainNav

const styles = StyleSheet.create({})