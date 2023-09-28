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
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <View style={styles.header}>
      <AntDesign
        name="leftcircleo"
        size={24}
        color="white"
        onPress={() => goBack()}
        disabled={!canGoBack()}
      />
      <Text style={styles.title}>Go back</Text>
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
    backgroundColor: "red",
    alignItems: "center",
    gap: 10,
    padding: 10,
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

export default Header;
