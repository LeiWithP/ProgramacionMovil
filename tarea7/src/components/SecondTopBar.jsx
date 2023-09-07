import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const SecondTopBar = ({
  leftIcon,
  rightIcon,
  title,
  onLeftIconPress,
  onRightIconPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftIconPress}>
        <FontAwesomeIcon name={leftIcon} size={24} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onRightIconPress}>
        <FontAwesomeIcon name={rightIcon} size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 40,
    height: 56,
    width: 370,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    color: "white",
  },
});

export default SecondTopBar;
