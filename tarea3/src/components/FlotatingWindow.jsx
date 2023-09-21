import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FloatingWindow = ({ isVisible, onClose, data }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.window}>
          <Text style={styles.text}>Name: {data.name}</Text>
          <Text style={styles.text}>Created: {data.created}</Text>
          <Text style={styles.text}>Edited: {data.edited || "Not Edited"}</Text>
          <Text style={styles.text}>Is Completed: {data.isCompleted ? "Yes" : "No"}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  window: {
    backgroundColor: "#A1CCD1",
    padding: 20,
    borderRadius: 14,
  },
  text: {
    color: "#F4F2DE",
    fontSize: 16,
    fontWeight: "500",
  }
});

export default FloatingWindow;
