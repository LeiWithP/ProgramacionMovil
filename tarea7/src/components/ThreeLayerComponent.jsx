import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Calculator from "./Calculator";
import CircleButton2 from "./CircleButton2";
import CircleButton3 from "./CircleButton3";
import FontAwesomeIcon from "react-native-vector-icons/Feather";

const ThreeLayerInterface = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backLayer}>
        <Text style={styles.layerText}>Exchange</Text>
      </View>

      <View style={styles.middleLayer}>
        <View style={styles.calculatorSection}>
          <View style={styles.menuSection1}>
            <View>
              <Text style={styles.layerText}>Current Wallet balance</Text>
              <Text style={styles.textNum1}>$23,867</Text>
            </View>
            <CircleButton2>
              <FontAwesomeIcon name="plus" size={24} color={"#d96e43"} />
            </CircleButton2>
          </View>
          <View style={styles.menuSection2}>
            <Text style={styles.layerText}>Withdraw Amount</Text>
            <Text style={styles.textNum2}>$19,29.00</Text>
          </View>
          <Calculator />
        </View>
      </View>

      <View style={styles.frontLayer}>
        <CircleButton3>
          <FontAwesomeIcon name="arrow-left" size={30} color={"#d96e43"} />
        </CircleButton3>
        <Text style={styles.textSwipe}>Swipe to Withdraw</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backLayer: {
    position: "absolute",
    top: 50,
    left: -162,
    width: 330,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    zIndex: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 16,
    padding: 20,
  },
  middleLayer: {
    position: "absolute",
    top: 110,
    left: -180,
    width: 360,
    height: 590,
    backgroundColor: "white",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  frontLayer: {
    position: "absolute",
    top: 570,
    left: -160,
    width: 320,
    height: 100,
    borderRadius: 60,
    backgroundColor: "#d96e43",
    zIndex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
  },
  layerText: {
    fontSize: 16,
    opacity: 0.4,
  },
  bottomMenu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  calculatorSection: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 400,
    height: 550,
  },
  menuSection1: {
    flexDirection: "row",
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 2,
    paddingBottom: 14,
    width: 320,
    justifyContent: "space-between",
  },
  menuSection2: {
    alignItems: "center",
    paddingVertical: 14,
    width: 320,
  },
  textNum1: {
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
  },
  textNum2: {
    fontSize: 44,
    color: "#d96e43",
    fontWeight: "bold",
  },
  textSwipe: {
    fontSize: 18,
    color: "white",
    marginLeft: 26,
  },
});

export default ThreeLayerInterface;
