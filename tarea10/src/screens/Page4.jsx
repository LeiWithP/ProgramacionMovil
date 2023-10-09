import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import Field from "../components/Field";
import SecretField from "../components/SecretField";
import OrangeButton from "../components/OrangeButton";
import getStyles from "../styles/Styles1";

const Page4 = ({ navigation }) => {
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
        <Field label="Nme" placeholder="Enter your name" />
        <Field label="Email" placeholder="Emter your email" />
        <SecretField label="Password" placeholder="Enter your password" />
        <View style={{ height: 30 }} />
        <OrangeButton text="Sign Up" />
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
