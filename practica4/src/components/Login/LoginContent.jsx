import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { THEME } from "../../theme/colors";
import AccountLoginButton from "./AccountLoginButton";

const LoginContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} value="19121002@morelia.tecnm.mx" />
        <TextInput style={styles.input} secureTextEntry={true} />
        <Text style={styles.text}>Forgot password?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.line}></View>
        <Text style={{ fontWeight: "bold" }}> Or login with</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.accountlog} s>
        <AccountLoginButton
          text={"Google"}
          imagePath={require("../../../assets/google.png")}
        />
        <AccountLoginButton
          text={"Facebook"}
          imagePath={require("../../../assets/facebook.png")}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={{ marginRight: 10 }}>Don't have an account?</Text>
        <Text style={styles.text}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  form: {
    gap: 20,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    borderColor: THEME.COLORS.GREY,
    paddingHorizontal: 20,
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    color: THEME.COLORS.GREEN.DARK,
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 16,
  },
  button: {
    backgroundColor: THEME.COLORS.GREEN.LIGHT,
    height: 60,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 19,
    fontWeight: "bold",
    color: THEME.COLORS.DARK_BLUE,
  },
  line: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: THEME.COLORS.GREY,
    marginBottom: 8,
  },
  image: {
    height: 20,
    width: 20,
  },
  iconButton: {
    height: 20,
    width: 20,
  },
  accountlog: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 50,
    flexDirection: 'row'
  }
});

export default LoginContent;
