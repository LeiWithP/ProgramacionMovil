import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { useTheme } from "./ThemeProvider";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const transactionsData = [
  { id: "1", name: "Benjamin Parker", num: "**** 3294" },
  { id: "2", name: "Emma Davis", num: "**** 2352" },
  { id: "3", name: "Olivia Williams", num: "**** 3629" },
  { id: "4", name: "Ethan Johnson", num: "**** 4361" },
];

const ContactsMenu = ({ text, onPress }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 35,
      alignItems: "center",
      justifyContent: "center",
      width: 380,
      height: 240,
      marginTop: 16,
    },
    simpleRow: {
      width: 340,
      marginVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    text: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
    },
    lightText: {
      fontSize: 16,
      fontWeight: "400",
      color: "grey",
    },
    icon: {
      backgroundColor: theme.colors.background,
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
  });

  const renderItem = ({ item }) => (
    <View style={styles.simpleRow}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.icon}>
          <FontAwesome name="users" size={20} color={theme.colors.text} />
        </View>
        <View>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.lightText}>{item.num}</Text>
        </View>
      </View>
      <FontAwesome name="asterisk" size={20} color={theme.colors.background} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.simpleRow}>
        <Text style={styles.text}>My contacts</Text>
        <FontAwesome name="search" size={20} color={theme.colors.background} />
      </View>
      <FlatList
        data={transactionsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ContactsMenu;
