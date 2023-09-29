import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PillButton from "../src/components/PillButton";
import Date from "../src/components/Date";
import Tickets from "../src/components/Tickets";
import Rate from "../src/components/Rate";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>UronMillions</Text>
        <Date />
        <Tickets />
        <View style={styles.rateContainer}>
          <Rate title="One time bet" />
          <Rate title="Subscription" />
        </View>
      </View>
      <PillButton
        title="Watch Results"
        color="#1a633b"
        onPress={() => navigation.navigate("Screen1")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9c2a3",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 40,
  },
  topText: {
    width: 360,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rateContainer: {
    flexDirection: "row",
    width: 360,
    justifyContent: "space-between",
  },
  section: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 450,
  },
});

export default Screen2;
