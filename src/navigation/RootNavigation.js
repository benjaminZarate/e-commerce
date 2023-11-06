import Home from '../screens/Home'
import React from 'react'
import ProductDetail from '../screens/ProductDetail'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen component={Home} name="home"/>
      <Stack.Screen component={ProductDetail} name="productDetail"/>
      <Stack.Screen component={Profile} name="profile"/>
      <Stack.Screen component={Cart} name="cart"/>
    </Stack.Navigator>
  );
};

export default RootNavigation;