import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Asset from "./Asset";

const data = [
  {
    id: "1",
    name: "Ethereum 345",
    percent: "29.74% ($28,015)",
    amount: "79.006 ETH",
    value: "$100,000.00",
    iconColor: "#d96e43",
  },
  {
    id: "2",
    name: "Biance",
    percent: "15.96% ($28,015)",
    amount: "107.70 BNB",
    value: "$30,812.92",
    iconColor: "#a6a25a",
  },
  {
    id: "3",
    name: "Tether usd",
    percent: "29.74% ($28,015)",
    amount: "79.006 ETH",
    value: "$100,000.00",
    iconColor: "#5aa662",
  },
];

const AssetList = () => {
  const renderItem = ({ item }) => (
    <Asset
      name={item.name}
      percent={item.percent}
      amount={item.amount}
      value={item.value}
      iconColor={item.iconColor}
      onPress={() => alert("MONEY! (You Lost Your House)")}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default AssetList;
