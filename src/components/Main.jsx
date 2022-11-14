import React from "react";
import { SafeAreaView, Text } from "react-native";
import TextToSpeechScreen from "./TextToSpeechScreen";
import { ContainerFull, TextFont } from "../../style";
const Main = () => {
  return (
    <ContainerFull>
      <TextFont>Rate Repository App</TextFont>
      <TextToSpeechScreen />
    </ContainerFull>
  );
};

export default Main;
