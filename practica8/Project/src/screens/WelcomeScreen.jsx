import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "../components/Button";
import { THEME } from "../theme/styles";

const WelcomeScreen = ({ onSignInPress, onSignUpPress}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}> Welcome! </Text>
      <Text style={styles.text}> Sign in or create a new account </Text>
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1282372702/vector/hot-air-balloon.jpg?s=612x612&w=0&k=20&c=rBwDLldjgBanl0Hz3EdyvfpGtoXX05h_s49KNmIxqso=",
        }}
        style={styles.image}
      />
      <Button onPress={onSignInPress} isPrimary text="Go to Sign In"/>
      <Button onPress={onSignUpPress} text="No account yet?" secondText="Sign up" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 50,
  },
  textHeader:{
    fontSize: 30,
    fontWeight: "bold",
  },
  text:{
    color: THEME.COLORS.GREY,
  }
});

export default WelcomeScreen;
