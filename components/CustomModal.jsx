import React, { useContext, useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GameContext } from "./context/ContexProvider";

const { height, width } = Dimensions.get("window");
const CustomModal = ({ visible, onClose, navigation }) => {
  const { currentPage, userData } = useContext(GameContext);

  return (
    <>
      <Modal transparent={true} visible={visible} onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={onClose}>
              <View style={styles.topBar}>
                <Icon name="chevron-down" size={20} color="white" />
              </View>
            </TouchableOpacity>

            <View style={styles.centeredContent}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                {currentPage == 0
                  ? "This is a bottom sheet, launched by tapping the lottie or swiping up"
                  : currentPage == 2 && (
                      <>
                        This is a webview, launched by{" "}
                        <Text style={{ color: "orange" }}>
                          {userData["firstName"]}
                        </Text>
                        . They are{" "}
                        <Text style={{ color: "#cf5ed1" }}>
                          {userData["age"]}
                        </Text>{" "}
                        yrs old.
                      </>
                    )}
              </Text>
              {currentPage === 2 && (
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                  <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Back to home</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  modalContent: {
    height: height,
    width: width,
    backgroundColor: "#000000",
    padding: 20,
    borderRadius: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: "white",
  },

  centeredContent: {
    justifyContent: "center",
    marginTop: "50%",
  },
  buttonContainer: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default CustomModal;
