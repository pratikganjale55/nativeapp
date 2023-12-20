import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomModal from "./CustomModal";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const BottomBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Icon name="chevron-up" size={20} color="white" />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.modalBtn}
        >
          <Text style={{ color: "white" }}>Bottom Sheet</Text>
        </TouchableOpacity>
        <CustomModal
          visible={modalVisible}
          onClose={closeModal}
          navigation={navigation}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBtn: {
    width: width,
    height: 50,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
export default BottomBar;
