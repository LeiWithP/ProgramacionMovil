import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from "react-native";

const EnterSelection = ({ label, initialValue, onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (onToggle) {
      onToggle(!isEnabled);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: 300,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default EnterSelection;
