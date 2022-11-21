import { View } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import RepsitoryStats from "./RepsitoryStats";
const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value / 100)}k` : String(value);
};

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={{ padding: 10 }}>
      <StyledText fontSize="subheading" fontWeight="bold">
        {props.fullName}
      </StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText>{props.language}</StyledText>
      <RepsitoryStats {...props} />
    </View>
  );
};

export default RepositoryItem;
