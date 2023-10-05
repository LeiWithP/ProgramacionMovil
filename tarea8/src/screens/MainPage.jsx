import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Page One")}>
        <Text>Page One</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Page Two")}
      >
        <Text>Page Two</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 40,
  },
});

export default MainPage;
