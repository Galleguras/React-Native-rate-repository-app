import React from "react";
import { SafeAreaView } from "react-native";
import RepositoryList from "./RepositoryList";

const Main = () => {
  return (
    <SafeAreaView style={{ margin: 15, flexGrow: 1 }}>
      <RepositoryList />
    </SafeAreaView>
  );
};

export default Main;
