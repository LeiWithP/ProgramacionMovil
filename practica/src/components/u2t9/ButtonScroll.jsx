import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import Numpad from "../../components/u2t9/Numpad";
import { useAppContext } from "../../hooks/useAppContext";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ButtonScroll = () => {
  const { theme, darkMode } = useAppContext();

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.scroll}>
        <View
          style={[
            styles.button,
            { borderColor: darkMode ? theme.dark.border : theme.light.border },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: darkMode ? theme.dark.text : theme.light.text },
            ]}
          >
            Activity
          </Text>
        </View>
        <View
          style={[
            styles.button,
            { borderColor: darkMode ? theme.dark.border : theme.light.border },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: darkMode ? theme.dark.text : theme.light.text },
            ]}
          >Contacts</Text>
        </View>
        <View
          style={[
            styles.button,
            { borderColor: darkMode ? theme.dark.border : theme.light.border },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: darkMode ? theme.dark.text : theme.light.text },
            ]}
          >Payment</Text>
        </View>
        <View
          style={[
            styles.button,
            { borderColor: darkMode ? theme.dark.border : theme.light.border },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: darkMode ? theme.dark.text : theme.light.text },
            ]}
          >Sale</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    width: "auto",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  scroll: {
    width: "100%",
    height: "100%",
    marginTop: 0,
  },
});

export default ButtonScroll;
