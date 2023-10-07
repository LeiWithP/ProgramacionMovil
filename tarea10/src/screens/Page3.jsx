import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import Field from "../components/Field";
import SecretField from "../components/SecretField";
import OrangeButton from "../components/OrangeButton";
import getStyles from "../styles/Styles1";

const Page3 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useTheme();

  const localStyles = StyleSheet.create({
    rightTtext: {
      color: theme.secondary,
      width: 320,
      fontSize: 14,
      fontWeight: "400",
      textAlign: "right",
    },
    image: {
      width: "100%",
      height: 250,
      marginTop: -50,
      borderBottomLeftRadius: 120,
      borderBottomRightRadius: 120,
    }
  });

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/food.jpg")} style={localStyles.image} />
      <View>
        <Text style={styles.leftTitle}>Welcome!</Text>
        <View style={{ height: 26 }} />
        <Field label="Email" placeholder="Emter your email" />
        <SecretField label="Password" placeholder="Enter your password" />
        <Text style={localStyles.rightTtext}>Forgot Password?</Text>
      </View>
      <View>
        <OrangeButton text="Login" />
        <View style={{ height: 18 }} />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Page2")}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Page3;
