import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function PageOne() {
  return (
    <View style={styles.container}>
        <Text>Page One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 40
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "200",
    color: "grey",
  },
  image: {
    width: 300,
    height: 340,
    marginVertical: 40,
    borderRadius: 20
  }
});

export default PageOne;