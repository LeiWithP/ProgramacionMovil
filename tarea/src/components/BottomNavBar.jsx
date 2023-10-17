import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import Icon from "react-native-vector-icons/FontAwesome";

const BottomNavBar = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: theme.background,
      width: 360,
      height: 60,
      marginBottom: 20,
    },
    navButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    centerButton: {
      width: 60,
      height: 60,
      marginBottom: 50,
      backgroundColor: theme.primary,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="compass" size={24} color={theme.text} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="heart" size={24} color={theme.text} />
        <Text>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.centerButton}>
        <Icon name="shopping-cart" size={24} color={theme.background} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="list" size={24} color={theme.text} />
        <Text>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="user" size={24} color={theme.text} />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
