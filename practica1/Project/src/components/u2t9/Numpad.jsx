import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme/styles";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useAppContext } from "../../hooks/useAppContext";

const Numpad = () => {
  const { theme, darkMode } = useAppContext();

  const numpadLayout = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
      <Ionicons name="md-reload-outline" size={24} color={
        darkMode ? theme.dark.text : theme.light.text
      } />,
      0,
      <Feather name="x" size={24} color={
        darkMode ? theme.dark.text : theme.light.text
      } />,
    ],
  ];

  return (
    <View style={styles.container}>
      {numpadLayout.map((row, rowIndex) =>
        row.map((buttonValue, index) => (
          <TouchableOpacity key={index} style={[styles.circle,
            { backgroundColor: darkMode ? theme.dark.secondary : theme.light.secondary },
          ]}>
            <Text style={[styles.text,
              { color: darkMode ? theme.dark.text : theme.light.text },
            ]}>{buttonValue}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberHeader: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 5,
  },
  text: {
    fontSize: 14,
    color: THEME.COLORS.WHITE,
  },
  circle: {
    borderColor: "transparent",
    borderWidth: 2,
    height: 60,
    width: "28%",
    marginHorizontal: "0.5%",
    marginVertical: "0.5%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

export default Numpad;
