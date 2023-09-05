import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TopBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.iconText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.iconText}>🧑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    width: 350,
  },
  title: {
    fontSize: 28,
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  iconText: {
    fontSize: 20,
    color: "white",
  },
});

export default TopBar;
