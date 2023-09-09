import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // You can use any icon library you prefer

const BottomNavigationBar = ({ onIconPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onIconPress("home")}>
        <Icon name="home" size={24} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onIconPress("search")}>
        <Icon name="comment" size={24} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onIconPress("add")}>
        <Icon name="calendar" size={24} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onIconPress("profile")}>
        <Icon name="user" size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    elevation: 1,
    borderRadius: 16
  },
  icon: {
    color: "#2362df"
  },
});

export default BottomNavigationBar;
