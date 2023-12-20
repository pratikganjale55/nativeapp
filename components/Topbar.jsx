import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import avatar from "../assets/Images/Avatar.jpg";
import { useNavigation } from "@react-navigation/native";
import { GameContext } from "./context/ContexProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TopBar = () => {
  const navigation = useNavigation();
  const {userData} = useContext(GameContext) ;
  const handleLogout = () => {
    navigation.navigate("login");
  };

  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={avatar} style={styles.profileImage} />
          <Text style={styles.username}>{userData["email"]}</Text>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    //   backgroundColor: '#000000',
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  logoutButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: 800,
    fontWeight: "bold",
    color: "#808080",
  },
});

export default TopBar;
