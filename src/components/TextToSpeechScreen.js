import * as Speech from "expo-speech";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const TextToSpeechScreen = () => {
  const [iptValue, setIptValue] = useState("1");

  const speak = () => {
    const thingToSay = "1";
    Speech.speak(thingToSay, {
      language: "es-ES",
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Type something..."
        value={iptValue}
        onChangeText={(text) => setIptValue(text)}
      />
      <Button title="Listen" onPress={speak} />
    </View>
  );
};

export default TextToSpeechScreen;
