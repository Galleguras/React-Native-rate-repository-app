import Main from "./src/components/Main.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initialRouteName="Main" name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
