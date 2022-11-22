import { View, StyleSheet, Image } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import RepsitoryStats from "./RepsitoryStats";
import RepositoryHeader from "./RepositoryHeader";
import { theme } from "../theme";
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
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.textSecondary,
    alignSelf: "flex-start",
    borderRadius: 3,
    overflow: "hidden",
  },
  image: { width: 50, height: 50, borderRadius: 4 },
});

export default RepositoryItem;
