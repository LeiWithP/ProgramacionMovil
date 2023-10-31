import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import { FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    name: "Benjamin Parker",
    number: "**** 3294",
  },
  {
    id: 2,
    name: "Emma Davis",
    number: "**** 3294",
  },
  {
    id: 3,
    name: "Benjamin Parker",
    number: "**** 3294",
  },
  {
    id: 4,
    name: "Benjamin Parker",
    number: "**** 3294",
  },
];

const Contacts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>My Contacts</Text>
        <AntDesign name="search1" size={24} color="white" />
      </View>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <View style={{flexDirection: "row"}}>

            <Image
              style={styles.image}
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.number}>{item.number}</Text>
            </View>
            </View>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color="white"
              style={{
                alignSelf: "flex-end",
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: THEME.COLORS.BLACK.EERIE,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  list: {
    marginTop: 10,
    width: "100%",
    height: "100%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contact: {
    width: "auto",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  name: {
    color: THEME.COLORS.WHITE,
    fontSize: 14,
    fontWeight: "bold",
  },
  number: {
    color: THEME.COLORS.WHITE,
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Contacts;
