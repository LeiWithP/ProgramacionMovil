import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import Field from "../components/Field";
import SecretField from "../components/SecretField";
import OrangeButton from "../components/OrangeButton";
import getStyles from "../styles/Styles1";
import { useUserContext } from "../context/UserContext";

const Page4 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useTheme();
  const { signUp } = useUserContext();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    signUp(formData)
      .then((user) => {
        console.log("Sign Up!");
        navigation.navigate("Page3");
      })
      .catch((error) => {
        console.log("Error: ", error );
      });
  };

  const localStyles = StyleSheet.create({
    rightTtext: {
      color: theme.secondary,
      width: 320,
      fontSize: 14,
      fontWeight: "400",
      textAlign: "right",
    },
    composeText: {
      flexDirection: "row",
      justifyContent: "flex-start",
      width: 320,
    },
    sText: {
      fontSize: 14,
      fontWeight: "300",
      color: theme.text,
    },
    sTextBlue: {
      fontSize: 14,
      fontWeight: "300",
      color: "cyan",
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <Text style={styles.leftTitle}>Sign Up</Text>
        <View style={localStyles.composeText}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Page3")}>
            <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 26 }} />
        <Field
          label="Name"
          placeholder="Enter your name"
          onChangeText={(text) => setFormData({ ...formData, username: text })}
        />
        <Field
          label="Email"
          placeholder="Emter your email"
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <SecretField
          label="Password"
          placeholder="Enter your password"
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
        <View style={{ height: 30 }} />
        <OrangeButton text="Sign Up" onPress={handleSignUp} />
        <View style={{ height: 20 }} />
        <View style={{ flexDirection: "row", width: 300 }}>
          <Text style={localStyles.sText}>
            By signing up, you are agreeing to our{" "}
          </Text>
          <Text style={localStyles.sTextBlue}>Tearms of </Text>
        </View>
        <View style={{ flexDirection: "row", width: 300 }}>
          <Text style={localStyles.sTextBlue}>Service</Text>
          <Text style={localStyles.sText}>and </Text>
          <Text style={localStyles.sTextBlue}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};

export default Page4;
