import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import getStyles from "../styles/Styles1";

const Page1 = ({ navigation }) => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Shopping with best e-commerce store</Text>
        <View style={{ height: 12 }} />
        <View style={{ marginHorizontal: 40 }}>
          <Text style={styles.text}>
            Find best shopping experience with us by your favorite daily needs!
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Page3")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started!</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={toggleTheme}
        style={{
          marginTop: 20,
          backgroundColor: theme.text,
          padding: 10,
          borderRadius: 8,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: theme.background }}>Toggle Dark Mode</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Page1;
