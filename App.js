import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import MyTabs from "./src/components/MyTabs.jsx";
import { StatusBar } from "expo-status-bar";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="inverted" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            initialRouteName="MyTabs"
            name="MyTabs"
            component={MyTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
