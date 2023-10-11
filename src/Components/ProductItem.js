import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { setProductPressed } from '../redux/slice/homeSlice';

const ProductItem = ({item, navigation}) => {
  
  const dispatch = useDispatch();
  
  const onHandleItem = () => {
    dispatch(setProductPressed(item));
    navigation.navigate("productDetail");
  }

  return (
    <View style={styles.container}>
      <Pressable
      onPress={() => {
        onHandleItem();
      }}>
        <Image
          height={90}
          width={90}
          source={{ uri: item.thumbnail }}
        />
      </Pressable>
        <Text style={styles.text}
          numberOfLines={2}
          adjustsFontSizeToFit={true}
        >{item.title}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        marginVertical: 10,
        borderColor: colors.heavyBlue,
        borderRadius: 10,
        borderWidth: 1,
        height: 150,
        width:'40%',
        padding:0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text:{
      paddingRight: 5,
      paddingLeft: 5,
        fontSize:16,
        fontWeight: "600",
        flexWrap: 'wrap',
        fontFamily: "RobotoMono",
    },
})