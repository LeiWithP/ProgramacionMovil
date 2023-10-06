import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "./ThemeProvider";

const CustomHeader = ({ title, navigation, toggleTheme }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colors.background,
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    backButton: {
      marginLeft: 10,
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.colors.text,
      marginLeft: 10,
      marginRight: 10,
    },
    mailIcon: {
      marginRight: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="md-arrow-back" size={30} color={theme.colors.text} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity
        onPress={() => toggleTheme()}
        style={styles.backButton}
      >
      <Ionicons
        name="md-mail"
        size={30}
        color={theme.colors.text}
        style={styles.mailIcon}
      />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
