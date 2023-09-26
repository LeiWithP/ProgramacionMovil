import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

const RickAndMortyApp = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the Rick and Morty API
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            // style={styles.item}
            onPress={() => navigation.navigate("Details", { item })}
          >
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textBox}>
                <Text style={styles.text1}>{item.name}</Text>
                <Text style={styles.text2}>
                  {item.status} - {item.species}
                </Text>
                <Text style={styles.text3}>Last Known Location:</Text>
                <Text style={styles.text2}>{item.location.name}</Text>
                <Text style={styles.text3}>First Seen In:</Text>
                <Text style={styles.text2}>{item.origin.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    paddingTop: 40,
  },
  item: {
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#282a2e",
    flexDirection: "row",
    height: 130,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 130,
  },
  textBox: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 10,
    paddingVertical: 5,
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 12,
    fontWeight: "300",
    color: "white",
  },
  text3: {
    fontSize: 10,
    fontWeight: "200",
    color: "gray",
  },
});

export default RickAndMortyApp;
