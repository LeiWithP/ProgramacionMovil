import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { useTheme } from "./ThemeProvider";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const transactionsData = [
  { id: "1", name: "Ethan Johnson", date: "May 7, 2023", value: "+$1,220.00" },
  { id: "2", name: "Benjamin Parker", date: "May 7, 2023", value: "-$10.00" },
  { id: "3", name: "Emma Davis", date: "May 6, 2023", value: "+$120.00" },
];

const TransactionsMenu = ({ text, onPress }) => {
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
      height: 270,
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
          <FontAwesome name="credit-card" size={20} color={theme.colors.text} />
        </View>
        <View>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.lightText}>{item.date}</Text>
        </View>
      </View>
      <Text style={styles.text}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.simpleRow}>
        <Text style={styles.text}>Transactions</Text>
        <Text style={styles.lightText}>See All</Text>
      </View>
      <FlatList
        data={transactionsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TransactionsMenu;
