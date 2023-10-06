import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import Numpad from "../../components/u2t9/Numpad";
import { useAppContext } from "../../hooks/useAppContext";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const CardScroll = () => {
  const { theme, darkMode } = useAppContext();

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.cards}>
        <TouchableOpacity
          style={[
            styles.addCard,
            {
              backgroundColor: darkMode
                ? theme.dark.addButton
                : theme.light.addButton,
            },
          ]}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: darkMode
                ? theme.dark.addButtonText
                : theme.light.addButtonText,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.card,
            {
              backgroundColor: darkMode
                ? theme.dark.card
                : theme.light.card,
            },
          ]}
        >
          <View style={styles.topCard}>
            <FontAwesome name="cc-mastercard" size={24} color={ darkMode ? theme.light.icon : theme.light.icon  } />
            <Text style={styles.cardNumber}>**** 4934</Text>
          </View>
          <View>
            <Text style={[styles.text, { color: darkMode ? theme.light.text : theme.light.text }]}>
              <Text>$</Text>
              <Text style={styles.int}>13,397.</Text>
              <Text>23</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    height: 175,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cards: {
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
  addCard: {
    width: 75,
    height: 125,
    borderWidth: 0,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 200,
    height: 125,
    padding: 15,
    marginLeft: 10,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  topCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: THEME.COLORS.GRAY.DIM,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.COLORS.BLACK.NIGHT,
  },
  int: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default CardScroll;
