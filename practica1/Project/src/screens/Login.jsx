import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import useAuth from "../hooks/useAuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin: onLogin } = useAuth();
  const navigation = useNavigation();

  const handleLogin = () => {
    try {
      const loginValue = onLogin(username, password);
      if (loginValue) {
        console.log("Login successful");
        navigation.navigate("Home");
      } else {
        console.log("Login failed");
        Alert.alert("Error", "Login failed");
      }
    } catch (error) {
      console.log("Error: ", error);
      Alert.alert("Error", "Login failed");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Login Screen
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Username
      </Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      ></TextInput>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Password
      </Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={handleLogin}
      >
        <Text>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;