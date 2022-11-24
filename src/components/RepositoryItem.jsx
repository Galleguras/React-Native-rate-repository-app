import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryHeader from "./RepositoryHeader";
import RepsitoryStats from "./RepsitoryStats";
const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value / 100)}k` : String(value);
};

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryHeader {...props} />
      <RepsitoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 5, paddingTop: 5 },
});

export default RepositoryItem;
