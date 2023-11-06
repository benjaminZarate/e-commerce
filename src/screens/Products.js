import { View, FlatList } from 'react-native'
import React from 'react'
import ProductItem from '../Components/ProductItem'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux'

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