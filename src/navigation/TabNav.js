import { View, Text, Platform } from "react-native";
import React from "react";

// Icons
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootNavigation from "./RootNavigation";
import Profile from "../screens/Profile";

import { colors } from "../theme/colors";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="shop"
              size={focused ? 25 : 20}
              color={focused ? colors.pink : "black"}
            />
          ),
        }}
        name="rootNavigation"
        component={RootNavigation}
      />
            <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="shopping-cart" 
            size={focused ? 25 : 20} 
            color="black" />
          ),
        }}
        name="cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle-outline"
              size={focused ? 25 : 20}
              color={focused ? colors.pink : "black"}
            />
          ),
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNav;