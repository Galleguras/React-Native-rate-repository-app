import { View, Text, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import React from "react";
import RepositoryList from "./RepositoryList";
const Main = () => {
  return (
    <SafeAreaView style={{ margin: 15, flexGrow: 1 }}>
      <Text>Rate Repository App</Text>
      <RepositoryList />
    </SafeAreaView>
  );
};

export default Main;
