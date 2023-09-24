import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SymptomCard = ({ symptom }) => {
  return (
    <View style={styles.symptomsContainer}>
      <Text style={styles.symptomText}>
        {symptom === "none" ? "🙂" : symptom === "fever" ? "🤒" : "🤧"}
        {"   "}
        {symptom === "none" ? "I am fine" : symptom}
      </Text>
    </View>
  );
};

export default SymptomCard;

const styles = StyleSheet.create({
  symptomsContainer: {
    height: 50,
    width: 150,
    borderRadius: 40,
    backgroundColor: "#e6ecff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    flexDirection: "row",
  },
  symptomText: {
    fontSize: 18,
    color: "#485258",
    fontWeight: "600",
  },
});