import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import Numpad from "../../components/u2t9/Numpad";
import { useAppContext } from "../../hooks/useAppContext";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const OptionsScroll = ({ toScreen2, toScreen3 }) => {
  const { theme, darkMode } = useAppContext();

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.cards}>
        <TouchableOpacity
          style={[
            styles.card,
            {
              backgroundColor: darkMode
                ? theme.dark.secondary
                : theme.light.secondary,
            },
          ]}
          onPress={toScreen3}
        >
          <MaterialCommunityIcons
            name="wallet-membership"
            size={24}
            color={darkMode ? theme.dark.icon : theme.light.icon}
          />
          <Text
            style={[
              styles.text,
              {
                color: darkMode ? THEME.COLORS.MINDARO : theme.light.icon,
              },
            ]}
          >
            Send
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.card,
            {
              backgroundColor: darkMode
                ? theme.dark.secondary
                : theme.light.secondary,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="wallet-membership"
            size={24}
            color={darkMode ? theme.dark.icon : theme.light.icon}
          />
          <Text
            style={[
              styles.text,
              {
                color: darkMode ? THEME.COLORS.MINDARO : theme.light.icon,
              },
            ]}
          >
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.card,
            {
              backgroundColor: darkMode
                ? theme.dark.secondary
                : theme.light.secondary,
            },
          ]}
        >
          <AntDesign
            name="sync"
            size={24}
            color={darkMode ? theme.dark.icon : theme.light.icon}
          />
          <Text
            style={[
              styles.text,
              {
                color: darkMode ? THEME.COLORS.MINDARO : theme.light.icon,
              },
            ]}
          >
            Swap
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cards: {
    width: "100%",
    height: "100%",
    marginTop: 0,
  },
  card: {
    width: 100,
    height: 100,
    padding: 10,
    marginLeft: 10,
    borderColor: "transparent",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default OptionsScroll;
