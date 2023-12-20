import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validate, setValidate] = useState("");
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    setEmailError("");
    setPasswordError("");
    setValidate("");
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    try {
      // Vibration.vibrate(10);
      if (!validateEmail(formData.email)) {
        setEmailError("Invalid email address");
        return;
      }
      if (!formData.password) {
        setPasswordError("Password is required");
        return;
      }
      const userDataString = await AsyncStorage.getItem("userData");
      const userData = JSON.parse(userDataString);
      console.log(userData);
      console.log(formData.email, formData.password);
      if (
        userData.email == formData.email &&
        userData.password == formData.password
      ) {
        navigation.navigate("main");
      } else {
        setValidate("Check email and password");
        return;
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  return (
    <>
      <View style={Styles.loginContainer}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            marginTop: 50,
          }}
        >
          <Text style={Styles.logoText}>
            CUEMATH <Text style={{ color: "orange" }}>GO !</Text>
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#808080"
            style={[Styles.input, { color: "white" }]}
            onChangeText={(text) => handleInputChange("email", text)}
            value={formData.email}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#808080"
            style={[Styles.input, { color: "white" }]}
            onChangeText={(text) => handleInputChange("password", text)}
            value={formData.password}
            secureTextEntry={true}
          />
        </View>
        <Text style={{ color: "white" }}>
          {emailError || passwordError || validate}
        </Text>
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
          <TouchableOpacity style={Styles.loginBtn} onPress={handleSubmit}>
            <Text style={{ color: "black" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const Styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#000000",

    color: "white",
  },
  loginCard: {
    padding: 10,
  },
  logoText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  loginBtn: {
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
export default Login;
