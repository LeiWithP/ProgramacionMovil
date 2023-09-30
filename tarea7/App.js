import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from "react-native";

const MovieRatingsApp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=UmP1i66gRFqU32WolfdFbuTEGdMKUcK2"
      )
        .then((response) => response.json())
        .then((json) => {
          setData(json.results);
          setIsLoading(false); // Set loading to false when data is fetched
        })
        .catch((error) => console.error(error));
    }, 5000); // Wait 5 seconds before fetching data
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#E9B384" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text1}>Titulo: {item.title}</Text>
              <Text style={styles.text2}>URL: {item.url}</Text>
              <Text style={styles.text2}>Seccion: {item.section}</Text>
              <Text style={styles.text2}>Tipo: {item.type}</Text>
              <Text style={styles.text2}>Fecha: {item.published_date}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#282a2e",
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  image: {
    width: 130,
    height: 130,
  },
  textBox: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 10,
    padding: 15,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 16,
    fontWeight: "300",
    color: "white",
  },
  text3: {
    fontSize: 10,
    fontWeight: "200",
    color: "gray",
  },
});

export default MovieRatingsApp;
