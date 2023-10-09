import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import getStyles from "../styles/Styles1";

const Page1 = ({ navigation }) => {
  const styles = getStyles();

  const localStyles = StyleSheet.create({
    image: {
      width: 300,
      height: 300,
      marginTop: 120,
    }
  });

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/burger.png")} style={localStyles.image} />
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
        // onPress={() => navigation.navigate("Page3")}
        onPress={() => navigation.navigate("Page2")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1;
