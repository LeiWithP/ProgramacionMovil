import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  Modal,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";

import { THEME } from "./src/theme/styles";

export default function App() {
  const [characters, setCharacters] = useState([]);


  const getApiData = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      const data = await response.json();
      setCharacters(data.results);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign:"center" }}>Characters</Text> 
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, color: THEME.COLORS.WHITE }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 15, color: THEME.COLORS.WHITE }}>
              {item.status}
            </Text>
            <Text style={{ fontSize: 15, color: THEME.COLORS.WHITE }}>
              {item.species}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: ReactStatus.currentHeight,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
});
