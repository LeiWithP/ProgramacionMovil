import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import { useAppContext } from "../../hooks/useAppContext";
import NavBar from "../../components/u2t9/NavBar";
import { Entypo } from "@expo/vector-icons";
import IconButton from "../../components/u2t9/IconButton";
import CardScroll from "../../components/u2t9/CardScroll";
import OptionsScroll from "../../components/u2t9/OptionsScroll";
import ButtonScroll from "../../components/u2t9/ButtonScroll";
import Contacts from "../../components/u2t9/Contacts";

const Screen = ({ navigation }) => {
  const { theme, darkMode, handleDarkMode } = useAppContext();
  const isDark = useColorScheme();
  console.log("isDark", isDark);
  console.log("theme", theme);

  left = (
    <Image
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      style={styles.profileImage}
    />
  );
  icon = (
    <Entypo
      name="dots-two-vertical"
      size={24}
      color={darkMode ? theme.dark.icon : theme.light.icon}
    />
  );
  right = <IconButton icon={icon} />;

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
        onPress2={() => handleDarkMode()}
      />
      <View
        style={[
          styles.header,
          {
            backgroundColor: darkMode
              ? theme.dark.primary
              : theme.light.primary,
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: darkMode ? theme.dark.text : theme.light.text },
          ]}
        >
          My Cards
        </Text>
      </View>
      <CardScroll />
      <OptionsScroll toScreen3={() => navigation.navigate("Third")} />
      <ButtonScroll />
      <Contacts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerLight: {
    backgroundColor: THEME.COLORS.WHITE,
  },
  containerDark: {
    backgroundColor: THEME.COLORS.BLACK.NIGHT,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  header: {
    width: "100%",
    paddingTop: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
  },
});
export default Screen;
