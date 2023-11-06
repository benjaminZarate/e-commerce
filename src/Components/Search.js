import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {colors} from '../theme/colors.js'
import { useDispatch, useSelector } from 'react-redux';
import { setProductsList } from '../redux/slice/homeSlice.js';

const Search = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.homeSlice.allProducts);

  useEffect(() => {
    if(text) {
      const titleProduct = allProducts.filter((el) => el.title.toLowerCase().includes(text.toLowerCase()));
      dispatch(setProductsList(titleProduct));
    }else {
      dispatch(setProductsList(allProducts));  
    }
  });

  const clearText = () => 
  {
    dispatch(setProductsList(allProducts));
    setText("");
  }

  const onChangeTextInput = (value) => {
    setText(value);
  }

  return (
    <View style= {styles.container}>
      <TextInput
        onChangeText={onChangeTextInput}
        value={text}
        style={styles.input}
        placeholder='busca un producto aqui'
      />
      <Pressable onPress={() => clearText()}>
        <AntDesign name="close" size={24} color="black" />
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  input: {
    width: "78%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.heavyBlue,
    padding: 10,
    fontSize: 20,
    marginRight: 15,
    backgroundColor: 'white',
  },
});

export default Search