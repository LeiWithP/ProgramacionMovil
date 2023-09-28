import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  Image,
} from "react-native";

import { THEME } from "../../theme/styles";
import { useEffect, useState } from "react";

const RickMortyCard = ({ image, name, status, species, location, episode }) => {
  const [episodeName, setEpisodeName] = useState("");

  useEffect(() => {
    const fetchEpisodeData = async () => {
      try {
        const response = await fetch(episode);
        const data = await response.json();
        setEpisodeName(data.name);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEpisodeData();
  }, [episode]);

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.cardInfo}>
        <View style={{}}>
          <Text style={styles.cardTitle}>{name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={[
                styles.status,
                status === "Alive"
                  ? { backgroundColor: "green" }
                  : status === "Dead"
                  ? { backgroundColor: "red" }
                  : status === "Unknown"
                  ? { backgroundColor: "gray" }
                  : { backgroundColor: "gray" },
              ]}
            />
            <Text style={styles.cardText}>
              <Text style={{ textTransform: "capitalize" }}>{status}</Text>
              <Text> - </Text>
              <Text>{species}</Text>
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.cardTextLabel}>Last known location: </Text>
          <Text style={styles.cardText}>{location}</Text>
        </View>

        <View>
          <Text style={styles.cardTextLabel}>First seen in: </Text>
          <Text style={styles.cardText}>{episodeName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GUNMETAL,
  },
  cardInfo: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
    gap: 15,
    justifyContent: "space-between",
    flexWrap: "wrap",
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
  card: {
    backgroundColor: THEME.COLORS.ONYXS,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 10,
  },
  image: {
    height: "100%",
    width: "40%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  status: {
    height: 10,
    width: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardText: {
    color: "white",
    fontSize: 15,
  },
  cardTextLabel: {
    color: THEME.COLORS.GRAY.DIM,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default RickMortyCard;
