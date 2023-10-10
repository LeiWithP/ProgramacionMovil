import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import Field from "../components/Field";
import SecretField from "../components/SecretField";
import OrangeButton from "../components/OrangeButton";
import getStyles from "../styles/Styles1";
import { useUserContext } from "../context/UserContext";

const Page3 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useTheme();
  const { getUserData, login } = useUserContext();
  const userData = getUserData();

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
      marginTop: -60,
      borderBottomLeftRadius: 120,
      borderBottomRightRadius: 120,
    },
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = () => {
    login(formData, userData)
      .then((user) => {
        console.log("Login!");
        navigation.navigate("Page2");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/food.jpg")}
        style={localStyles.image}
      />
      <View>
        <Text style={styles.leftTitle}>Welcome!</Text>
        <View style={{ height: 26 }} />
        <Field
          label="Email"
          placeholder="Emter your email"
          // value={userData ? userData.email : undefined}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <SecretField
          label="Password"
          placeholder="Enter your password"
          // value={userData ? userData.password : undefined}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
        <Text style={localStyles.rightTtext}>Forgot Password?</Text>
      </View>
      <View>
        <OrangeButton text="Login" onPress={handleLogin} />
        <View style={{ height: 18 }} />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Page4")}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Page3;
