import React from "react";
import { Image, View, StyleSheet, ScrollView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerImage}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Image style={styles.headerImage} source={{ uri: "https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg" }} />
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "blue" }}>Hello,</Text>
        <Text style={{ color: "blue" }}>Chris</Text>
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  headerImage: {},
  titleText: {
    marginTop: 15,
    fontSize: 38,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;