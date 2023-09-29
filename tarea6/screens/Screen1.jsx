import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PillButton from "../src/components/PillButton";

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topText}>
        <Text style={styles.text1}>Play and Win!</Text>
        <Text style={styles.text2}>
          Game for anyone who likes to try luck at guessing numbers
        </Text>
      </View>
      <Image
        source={require("../assets/calendar.png")}
        style={styles.image}
      />
      <PillButton
        title="Get Started"
        color="orange"
        onPress={() => navigation.navigate("Screen2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a633b",
    justifyContent: "space-around",
    alignItems: "center",
  },
  topText: {
    width: 360,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  text1: {
    fontSize: 45,
    color: "white",
    fontWeight: "600",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  text2: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 60,
    fontWeight: "200",
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default Screen1;
