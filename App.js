import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainContainer from "./components/MainConatiner";
import ContexProvider from "./components/context/ContexProvider";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ContexProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="home"
            component={HomePage}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name="signup"
            component={Signup}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="main"
            component={MainContainer}
            options={{ headerShown: false }}
          />
         
         
        </Stack.Navigator>
      </NavigationContainer>
     
    </ContexProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
