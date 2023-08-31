import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import Login from "./src/screens/Login";
import Person from "./src/components/Person";

const DATA = [
  { id: 0, name: "uziel", lastName: "barrita" },
  { id: 1, name: "mario", lastName: "perez" },
  { id: 2, name: "claudia", lastName: "ponce" },
  { id: 3, name: "grecia", lastName: "rivera" },
];

export default function App() {
  const { height, width } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <FlatList
        data={DATA}
        renderItem={({ item: { name, lastName }, index }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.lastName}>{lastName}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        keyExtractor={({ id }) => id.toString()} // Convert id to string
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  item: {
    backgroundColor: "#b8c1ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    width: 340
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  lastName: {
    fontSize: 26,
    color: "#555",
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "#414873",
  },
});
