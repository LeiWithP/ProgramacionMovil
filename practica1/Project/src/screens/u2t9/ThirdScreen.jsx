import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import Numpad from "../../components/u2t9/Numpad";
import { useAppContext } from "../../hooks/useAppContext";
import NavBar from "../../components/u2t9/NavBar";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import CustomButton2 from "../../components/CustomButton2";
import IconButton from "../../components/u2t9/IconButton";

const ThirdScreen = ({ navigation }) => {
  const { theme, darkMode, handleDarkMode } = useAppContext();
  const isDark = useColorScheme();
  console.log("isDark", isDark);
  console.log("theme", theme);

  icon1 = (
    <Ionicons
      name="md-arrow-back"
      size={24}
      color={darkMode ? theme.dark.icon : theme.light.icon}
    />
  );
  icon2 = (
    <Entypo
      name="dots-two-vertical"
      size={24}
      color={darkMode ? theme.dark.icon : theme.light.icon}
    />
  );
  left = <IconButton icon={icon1} />;
  right = <IconButton icon={icon2} />;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? theme.dark.primary : theme.light.primary,
        },
      ]}
    >
      <NavBar
        left={left}
        right={right}
        text="Send"
        onPress1={() => navigation.navigate("Home")}
        onPress2={() => handleDarkMode()}
      />
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 50, height: 50 }}
        />
        <Text
          style={[
            styles.text,
            {
              color: darkMode ? theme.dark.text : theme.light.text,
            },
          ]}
        >
          Benjamin Parker
        </Text>
        <Text style={styles.creditCard}>**** **** **** 1234</Text>
        <Text>Balance</Text>
      </View>
      <View style={styles.wallet}>
        <Text>
          <Text style={[styles.int, 
            { color: darkMode ? theme.dark.text : theme.light.text, }
          ]}>$340</Text>
          <Text style={styles.decimal}>.00</Text>
        </Text>
      </View>
      <Numpad />
      <CustomButton2
        text="Send"
        isPrimary={!darkMode}
        color={darkMode ? theme.dark.addButton : theme.light.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.COLORS.BLACK.NIGHT,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
  },
  creditCard: {
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.COLORS.GRAY.DIM,
  },
  wallet: {
    justifyContent: "center",
    alignItems: "center",
  },

  line: {
    height: 2,
    marginVertical: 20,
    backgroundColor: THEME.COLORS.LIGHTWHITE,
  },
  content: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  int: {
    fontSize: 28,
    fontWeight: "bold",
  },
  decimal: {
    fontSize: 28,
    fontWeight: "bold",
    color: THEME.COLORS.GRAY.DIM,
  },
});

export default ThirdScreen;
