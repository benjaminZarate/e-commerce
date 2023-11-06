import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem';
import { productsInCart } from '../data/cart';
import Header from '../Components/Header';
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import NoItems from '../Components/NoItems';
import { setProductsList } from '../redux/slice/homeSlice';

const Cart = () => {
    
    const [totalPrice, setTotalPrice] = useState(0);
    const [productsList, setproductsList] = useState(productsInCart)

    useFocusEffect(
        React.useCallback(() => {
            let price = 0;
            for (let index = 0; index < productsInCart.length; index++) {
                const element = productsInCart[index].item;
                price += element.price * productsInCart[index].quantity;
              }
            setTotalPrice(price);
            setProductsList(productsInCart);
        }, [productsList])
    );
    
  return (
    <View>
        <Header title={"Carrito"} goBack={false}></Header>
        {productsList.length > 0 || productsList == null ? 
        <View>
        <FlatList
        style={styles.cartView}
        data={productsList}
        extraData={productsInCart}
        renderItem={({item}) => <CartItem item={item.item} quantity={item.quantity} setproductsList={setproductsList}/>}/>
        <Text>Total price ${totalPrice}</Text>
        </View> :
        <NoItems/>
        }

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    cartView:{
        padding:10,
    }
})