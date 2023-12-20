import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TopBar from "./Topbar";
import CarouselCom from "./CarouselCom";
import BottomBar from "./BottomBar";

const MainConatiner = () => {
  return (
    <>
      <View style={style.container}>
        <SafeAreaView>
          <View style={style.topBar}>
            <TopBar />
          </View>

          <View style={style.carouselContainer}>
            <CarouselCom />
          </View>
          <BottomBar />
        </SafeAreaView>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselContainer: {
    flex: 1,

    // borderWidth: 1,
    // borderColor: 'white',
  },
  topBar: {
    marginTop: 40,
    width : "327px" ,
    // borderWidth: 1,
    // borderColor: "white",
  },
});

export default MainConatiner;
