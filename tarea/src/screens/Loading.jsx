import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Spinner from "react-native-loading-spinner-overlay";
import * as SecureStore from "expo-secure-store";
import { useUserContext } from "../context/UserContext";

const Loading = ({ navigation }) => {
  const { login } = useUserContext();

  useEffect(() => {
    (async () => {
      try {
        const userData = await SecureStore.getItemAsync("user_data");
        login(JSON.parse(userData))
          .then(() => {
            console.log("Automatic Login!");
            navigation.navigate("Page2");
          })
          .catch((e) => {
            console.log(e);
            navigation.navigate("Page1");
          });
      } catch (error) {
        console.error("Error loading user data:", error);
        navigation.navigate("Page1");
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Spinner
        visible={true}
        textContent="Loading..."
        textStyle={styles.spinnerText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerText: {
    color: "blue",
  },
});

export default Loading;
