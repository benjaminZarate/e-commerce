import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Header from '../Components/Header'
import { products } from '../data/products'
import ProductItem from '../Components/ProductItem'
import ProductDetail from './ProductDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux'
import { setProductsList } from '../redux/slice/homeSlice'

const Products = ({text, navigation}) => {
  const allProducts = useSelector(state => state.homeSlice.allProducts);
  const products = useSelector(state => state.homeSlice.productsList);

  return (
    <View>
        <FlatList
            data={products}
            keyExtractor={allProducts.id}
            renderItem={({ item }) => <ProductItem item={item} navigation={navigation}/>}
            numColumns={2}
        />  
    </View>
  )
}

export default Products