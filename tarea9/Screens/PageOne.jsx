import React from "react";
import { View, Text, StyleSheet } from "react-native";
import EnterText from "../Components/EnterText";
import EnterSelection from "../Components/EnterSelection";
import GoButton from "../Components/GoButton";

function PageOne() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>back!</Text>
      </View>
      <EnterText label="Email" value="name@example.com" />
      <EnterText label="Password" value="Enter yout password" />
      <EnterSelection label="Remember me" initialValue={ false } />
      <GoButton title="Sign In!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40
  },
  textContainer: {
    width: 300,
    marginBottom: 80,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
});

export default PageOne;
