import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { productsInCart, removeItem } from '../data/cart'

const CartItem = ({item, quantity, setproductsList}) => {
  return (
    <Pressable
    onPress={() => {removeItem(item); setproductsList(productsInCart); }}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>|</Text>
        <Text style={styles.itemText}>${item.price}</Text>
        <Text style={styles.itemText}>|</Text>
        <Text style={styles.itemText}>{quantity}</Text>
      </View>
    </Pressable>
  )
}

export default CartItem

const styles = StyleSheet.create({
    itemTextContainer:{
        flexDirection: "row",
        justifyContent:'space-between',
    },
    itemText:{
        padding: 2,
        fontSize: 24,
        fontFamily: "RobotoMono",
        color: colors.heavyBlue
    }
})