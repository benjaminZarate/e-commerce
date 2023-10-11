import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, navigation, goBack = true }) => {
  return (
    <View style={styles.container}>
      {goBack ? (
      <Pressable onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      ) : (<></>)}
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 25,
    color: colors.heavyBlue,
    flexWrap:'wrap',
    maxWidth: '100%',
    fontFamily: "InclusiveSans"
  },
});

export default Header