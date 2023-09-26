import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const item = route.params?.item || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tag}>Estado:</Text>
        <Text style={styles.text}>{item.status}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tag}>Especie:</Text>
        <Text style={styles.text}>{item.species}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tag}>Genero:</Text>
        <Text style={styles.text}>{item.gender}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tag}>Origen:</Text>
        <Text style={styles.text}>{item.origin.name}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tag}>Ubicacion:</Text>
        <Text style={styles.text}>{item.location.name}</Text>
      </View>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    paddingTop: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  tag: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
  image: {
    width: 280,
    height: 280,
  },
});

export default DetailsScreen;
