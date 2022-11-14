import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import Main from "./src/components/Main.jsx";
import { darkTheme, lightTheme } from "./theme";
const Stack = createNativeStackNavigator();

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen initialRouteName="Main" name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
