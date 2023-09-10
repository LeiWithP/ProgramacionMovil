import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import GoButton from "../Components/GoButton";
import WhiteButton from "../Components/WhiteButton";

function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Sign in or create a new account</Text>
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2023/07/21/12/14/hot-air-balloon-8141544_1280.jpg' }}
        style={styles.image}
      />
      <GoButton
        title="Go to Sign In"
        onPress={() => navigation.navigate("Sign In")}
      />
      <WhiteButton
        title1="Not account yet?"
        title2=" Sign up"
        onPress={() => navigation.navigate("Create Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 40
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "200",
    color: "grey",
  },
  image: {
    width: 300,
    height: 340,
    marginVertical: 40,
    borderRadius: 20
  }
});

export default MainPage;
