import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PopularList = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="people" size={50} color="#2362df" />
        <View style={{ flexDirection: "column", marginLeft: 30 }}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textTitle}>{item.title}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="star" size={20} color="#2362df" />
        <Text style={styles.textNum}>3.7</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    height: 80,
    padding: 16,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  textName: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },
  textTitle: {
    fontSize: 16,
    color: "grey",
    fontWeight: "300",
  },
  textNum: {
    fontSize: 18,
    color: "grey",
    fontWeight: "300",
    marginLeft: 10
  },
});

export default PopularList;
