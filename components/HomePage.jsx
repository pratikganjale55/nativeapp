import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={Styles.homeScreen}>
        <View style={{ marginTop: "-40%" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              marginTop: 40,
            }}
          >
            <Text style={Styles.logoText}>
              CUEMATH <Text style={{ color: "orange" }}>GO !</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              style={Styles.signupBtn}
              onPress={() => navigation.navigate("signup")}
            >
              <Text style={{ color: "black" }}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.loginBtn}>
              <Text
                style={{ color: "white" }}
                onPress={() => navigation.navigate("login")}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  logoText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  signupBtn: {
    width: 150,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  loginBtn: {
    width: 150,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
});
export default HomePage;
