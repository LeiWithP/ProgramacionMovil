import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeProvider";

const SearchBar = ({ onSearch, onFilter }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.tertiary,
      width: 320,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      marginVertical: 10,
    },
    input: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      fontSize: 18,
    },
    iconContainer: {
      padding: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSearch} style={styles.iconContainer}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        onChangeText={(text) => onSearch(text)}
      />
      <TouchableOpacity onPress={onFilter} style={styles.iconContainer}>
        <Feather name="filter" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
