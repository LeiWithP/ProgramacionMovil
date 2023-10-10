import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const CustomSideMenu = ({ onClose }) => {
  const navigation = useNavigation();

  const navigateToPage = (screenName) => {
    onClose(); // Close the side menu
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToPage("Page1")}
      >
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToPage("Page2")}
      >
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>
      {/* Add more menu items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  menuText: {
    marginLeft: 16,
    fontSize: 18,
  },
});

export default CustomSideMenu;
