import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  FlatList,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import { THEME } from "../../theme/styles";
import Header from "../../components/practica6/Header";

const LoginScreen = ({ route, navigation}) => {
    const { name } = route.params;

    const { canGoBack, goBack } = navigation;

  return (
    <View>
      <Header/>
      <Text style={{fontSize:20}}>LoginScreen { name }</Text>
      <Button title='Go Back' disabled={!canGoBack()} onPress={() => goBack()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GUNMETAL,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default LoginScreen;
