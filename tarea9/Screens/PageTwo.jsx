import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EnterText from "../Components/EnterText";
// import EnterSelection from "../Components/EnterSelection";
import GoButton from "../Components/GoButton";

function PageTwo() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Create new</Text>
        <Text style={styles.title}>account</Text>
      </View>
      <EnterText label="Full name" value="Enter your name" />
      <EnterText label="Email address" value="name@example.com" />
      <EnterText label="Create password" value="Enter yout password" />
      {/* <EnterSelection label="Remember me" initialValue={ false } /> */}
      <GoButton title="Sign Up!" />
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

export default PageTwo;
