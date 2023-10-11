import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import {productsInCart} from '../data/cart'

const AddCartButton = ({item}) => {
  return (
    <Pressable
    onPress={() => {
      productsInCart.push(item);
      }}>
        <View style={styles.container}>
        <Feather name="shopping-cart" size={36} color={colors.white} />
        <Text style={styles.carText}>Add To Cart</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginLeft: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        flexWrap: 'wrap',
        borderRadius: 8,
        alignSelf: 'baseline',
        justifyContent: 'flex-end',
        backgroundColor: colors.mediumBlue
    },
    carText:{
        paddingLeft: 10,
        fontSize: 25,
        color: colors.white,
        fontFamily: "InclusiveSans",
        fontWeight: '800',
    }
});

export default AddCartButton