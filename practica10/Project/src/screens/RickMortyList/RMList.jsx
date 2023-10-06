import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { THEME } from "../../theme/styles";
import RickMortyCard from "../../components/tarea4/RickMortyCard";

const RMList = () => {
  const [characters, setCharacters] = useState([]);
  const [episode, setEpisode] = useState({});

  const getApiData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rick & Morty Characters</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={characters}
          renderItem={({
            item: { image, name, status, species, location, episode },
          }) => (
            <RickMortyCard
              image={image.toString()}
              name={name}
              status={status}
              species={species}
              location={location.name}
              episode={episode[0]}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GUNMETAL,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default RMList;
