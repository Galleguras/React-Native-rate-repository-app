import React from "react";
import { Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "./Main";
const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: false,
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: Platform.select({
            android: 8,
            ios: 10,
            default: 8,
          }),
        },
        tabBarStyle: {
          backgroundColor: "red",
          paddingTop: Platform.select({
            android: 20,
            ios: 30,
            default: 25,
          }),
        },
      }}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Settings" component={Main} />
    </Tab.Navigator>
  );
};

export default MyTabs;
