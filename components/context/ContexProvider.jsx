import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";

export const GameContext = createContext();

const width = Dimensions.get("window").width;

const ContexProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userData, setUserData] = useState({});
  console.log("userData", userData);
  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / width);
    setCurrentPage(currentIndex);
  };
  useEffect(async () => {
    const fetchData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userData");
        const userData = JSON.parse(userDataString);
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <GameContext.Provider value={{ currentPage, handleScroll, userData }}>
      {children}
    </GameContext.Provider>
  );
};

export default ContexProvider;
