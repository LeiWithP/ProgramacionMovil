import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="md-arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      <Ionicons
        name="md-mail"
        size={30}
        color="white"
        style={styles.mailIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: 'black',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    marginRight: 10,
  },
  mailIcon: {
    marginRight: 10,
  },
});

export default CustomHeader;
