import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import Header from '../Components/Header';
import AddCartButton from '../Components/AddCartButton';
import { useSelector } from 'react-redux';

const ProductDetail = ({navigation}) => {
  const item = useSelector(state => state.homeSlice.productPressed);

  return (
    <View>
      <Header navigation={navigation} title={item.title}/>
        <View style={styles.container}>
        <Image
                      height={200}
                      width={Dimensions.width}
                      source={{ uri: item.thumbnail}}
                    />
          <View style={styles.containerTitlePrice}>
            <View>
              <Text style={styles.discountPrice}>${Math.round((item.price * 100) / (100-item.discountPercentage))}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 35, fontWeight: '500', fontFamily:"RobotoMono"}}>${item.price}</Text>
                {item.discountPercentage > 0 ? 
                <Text style={{paddingTop: 15, fontSize: 15, color: colors.mediumBlue, fontWeight: '400', fontFamily:"RobotoMono"}}>{Math.round(item.discountPercentage)}% off</Text>
                  : <></>
              }
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5,paddingRight:5, justifyContent:'flex-end'}}>
              <AntDesign name="star" size={24} color={colors.lightBlue} style={{paddingHorizontal: 5}} />
              <Text style={{fontSize: 20, fontFamily: "RobotoMono"}}>{item.rating}</Text>
            </View>

          </View>
          <Text style={{paddingTop: 10, fontSize:20, fontFamily: "RobotoMono"}}>{item.description}</Text>
          <AddCartButton item={item}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 5,
  },
  brand:{
    fontSize: 15
  },
  containerTitlePrice:{
    flexDirection:'row',
    justifyContent: 'space-between',

  },
  containerPrices:{
    flexDirection: 'row',
  },
  font25:{
    fontSize: 25
  },
  discountPrice:{
    textDecorationLine: 'line-through',
    color: 'grey',
    fontSize: 20,
    fontFamily: "RobotoMono"
  }
});

export default ProductDetail