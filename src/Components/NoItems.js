import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const NoItems = () => {
  return (
    <View >
      <Text style={styles.noItem}>No hay productos en su carrito</Text>
    </View>
  )
}

export default NoItems

const styles = StyleSheet.create({
    noItem: {
        padding: 10,
        fontSize: 16,
        color: colors.heavyBlue,
        fontFamily: "RobotoMono",
    },
})