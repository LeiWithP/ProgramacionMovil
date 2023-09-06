import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/Feather";

const Asset = ({ name, percent, amount, value, onPress, iconColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
          <FontAwesomeIcon name="cloud-snow" size={30} color={"white"} />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textBold}>{name}</Text>
            <Text style={styles.text}>{percent}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textBold}>{amount}</Text>
            <Text style={styles.text}>{value}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: 340,
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textBold: {
    fontSize: 16,
    color: "black",
    fontWeight: "700",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
});

export default Asset;
