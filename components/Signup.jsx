import React, { useState } from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollViewBase } from "react-native";

const height = Dimensions.get("window").height;
const Signup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    age: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setAgeError("");
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

      if (formData.password.length < 8) {
        setPasswordError("password should be min 8 chars");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setPasswordError("Confirm Password not same as password");
        return;
      }

      if (!formData.firstName) {
        setNameError("Name is required");
        return;
      }

      const ageNumber = parseInt(formData.age, 10);
      if (isNaN(ageNumber) || ageNumber <= 0) {
        setAgeError("age not a number");
        return;
      }
      await AsyncStorage.setItem("userData", JSON.stringify(formData));
      console.log("Data saved successfully!");
      const userDataString = await AsyncStorage.getItem("userData");
      console.log(userDataString);
      navigation.navigate("login");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  return (
    <>
      <ScrollView>
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
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#808080"
              style={[Styles.input, { color: "white" }]}
              onChangeText={(text) =>
                handleInputChange("confirmPassword", text)
              }
              value={formData.confirmPassword}
              secureTextEntry={true}
            />
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#808080"
              style={[Styles.input, { color: "white" }]}
              onChangeText={(text) => handleInputChange("firstName", text)}
              value={formData.firstName}
            />
            <TextInput
              placeholder="Age"
              placeholderTextColor="#808080"
              style={[Styles.input, { color: "white" }]}
              onChangeText={(text) => handleInputChange("age", text)}
              value={formData.age}
            />
          </View>

          <Text style={{ color: "white" }}>
            {emailError || passwordError || nameError || ageError}
          </Text>
          <View
            style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}
          >
            <TouchableOpacity style={Styles.loginBtn} onPress={handleSubmit}>
              <Text style={{ color: "black" }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const Styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#000000",
    height: height,
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
export default Signup;
