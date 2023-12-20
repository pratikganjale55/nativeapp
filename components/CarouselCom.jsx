import LottieView from "lottie-react-native";
import React, { useContext, useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { GameContext } from "./context/ContexProvider";
import data from "../assets/data";
import { Circle, Svg } from "react-native-svg";

const width = Dimensions.get("window").width;

const CircularBar = ({ radius, strokeWidth, progress }) => {
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#3498db"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          fill="transparent"
        />
      </Svg>
    </>
  );
};

const CarouselCom = () => {
  const { currentPage, handleScroll } = useContext(GameContext);
  const [progress, setProgress] = useState(0);
  const [tab, setTab] = useState(0);
  const handleTap = () => {
    if (tab > 2) {
      setProgress(0);
      setTab(0);
    }
    setTab((prev) => prev + 1);
    setProgress((prev) => prev + 33);
    console.log(progress, tab);
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToAlignment="center"
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          scrollEventThrottle={16}
          onScroll={handleScroll}
          pagingEnabled={true}
        >
          {data &&
            data.map((item, index) => (
              <TouchableOpacity key={item.id} onPress={() => handleTap(index)}>
                <View key={item.id} style={styles.carouselItem}>
                  <LottieView
                    source={item.image}
                    autoPlay={true}
                    loop={true}
                    style={styles.lottieView}
                   
                  />
                  {index == 1 && (
                    <View style={styles.lottieContainer}>
                      <CircularBar
                        radius={120}
                        strokeWidth={5}
                        progress={progress}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicatorDot,
                {
                  backgroundColor:
                    index === currentPage
                      ? "#FFFFFF"
                      : "rgba(255, 255, 255, 0.5)",
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {data[currentPage]?.description}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    gap: 38,
    marginBottom: 100,
    marginTop: 100,
    // borderWidth: 1,
    // borderColor: "white",
  },
  scrollView: {
    flexDirection: "row",
    width: width,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  carouselItem: {
    width: width - 20,
    height: 292,
    marginHorizontal: 10,
    padding: 10,
  },
  lottieView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  lottieContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 10,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  descriptionContainer: {
    marginVertical: 5,
  },
});

export default CarouselCom;
