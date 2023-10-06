import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeProvider";
import CardPlus from "../components/CardPlus";
import Card from "../components/Card";
import IconButton from "../components/IconButton";
import Tags from "../components/Tags";
import ContactsMenu from "../components/ContactsMenu";

function MainPage({ navigation }) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      paddingVertical: 40,
    },
    simpleRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: 340,
      marginVertical: 10,
    },
    title: {
      fontSize: 50,
      color: theme.colors.text,
      textAlign: "left",
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ width: 340 }}>
        <Text style={styles.title}>My Cards</Text>
      </View>
      <ScrollView horizontal style={{ flexDirection: "row", marginLeft: 20 }}>
        <CardPlus />
        <Card />
        <Card />
      </ScrollView>
      <View style={styles.simpleRow}>
        <IconButton
          iconName="credit-card"
          text="Send"
          onPress={() => navigation.navigate("Page One")}
        />
        <IconButton
          iconName="vcard"
          text="Receive"
          onPress={() => navigation.navigate("Page Two")}
        />
        <IconButton iconName="refresh" text="Swap" />
      </View>
      <View style={styles.simpleRow}>
        <Tags text="Activity" />
        <Tags text="Contacts" />
        <Tags text="Payments" />
        <Tags text="Sale" />
      </View>
      <ContactsMenu/>
    </View>
  );
}

export default MainPage;
