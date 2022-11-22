import React from "react";
import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import { theme } from "../theme";
const RepositoryHeader = (props) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image
          style={styles.image}
          source={{ uri: props.ownerAvatarUrl }}
        ></Image>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <StyledText fontSize="subheading" fontWeight="bold">
          {props.fullName}
        </StyledText>
        <StyledText color="secondary">{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
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

export default RepositoryHeader;
