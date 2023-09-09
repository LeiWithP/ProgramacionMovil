import React from "react";
import { Image, View, StyleSheet, ScrollView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Otros/Card";
import Status from "../components/Otros/Status";
import CircleIcon from "../components/Otros/CircleIcon.";
import PopularList from "../components/Otros/PopularList";
import BottomNavigationBar from "../components/Otros/BottomNavigationBar";

const WelcomeScreen = () => {
  const popularTherapists = [
    { id: "1", name: "Dr. Alice Johnson", title: "physiotherapist" },
    { id: "2", name: "Dr. Mark Smith", title: "therapist" },
    { id: "3", name: "Dr. Robinson Ace", title: "psicologist" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerImage}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <CircleIcon color="white" iconName="people" iconColor="#4273fc" />
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello,</Text>
        <Text style={{ color: "#2b3941" }}>Chris👋</Text>
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card
          color="#4273fc"
          text="Start Training"
          iconName="barbell-outline"
          iconColor="#e6ecff"
          textColor="white"
        />
        <Card
          color="#e6ecff"
          text="Your treatment plan"
          iconName="list"
          iconColor="#4273fc"
          textColor="black"
        />
      </ScrollView>
      <Text style={styles.textHeader}>What are your symptoms?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Status text="😉 I'm fine" />
        <Status text="🤒 Fever" />
        <Status text="🤧 Sneeze" />
        <Status text="😉 I'm fine" />
        <Status text="🤒 Fever" />
        <Status text="🤧 Sneeze" />
      </ScrollView>
      <Text style={styles.textHeader}>Popular therapists</Text>
      <View style={{height: 210}}>
      <PopularList data={popularTherapists} />
      </View>
      <BottomNavigationBar></BottomNavigationBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  headerImage: {
    width: 360,
    height: 50,
    borderRadius: 50,
    // resizeMode: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    height: 200,
    width: 200,
    borderRadius: 40,
    backgroundColor: "#e6ecff",
    padding: 20,
    justifyContent: "space-evenly",
  },
  cardIconContainer: {
    backgroundColor: "#2362df",
    width: 50,
    height: 50,
    // padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#236cff",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 26,
    marginLeft: 10,
  },
  symptomsContainer: {
    backgroundColor: "",
    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    marginRight: 15,
  },
});

export default WelcomeScreen;
