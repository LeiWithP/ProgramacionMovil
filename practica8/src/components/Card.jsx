import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Card from "../components/Card";
import SymptomCard from "../components/SymptomCard";
import Therapist from "../components/Therapist";

const Sarah =
  "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg";
const Isabelle =
  "https://files.lafm.com.co/assets/public/styles/twitter/public/2018-12/huerfana_1_0.jpg.webp?VersionId=WYRD2fIpG4MwhKiPMhYaxSIaQ5m1vWwn&itok=UZuFM-K0";
const Camille =
  "https://images.fanpop.com/images/image_uploads/The-Quiet-camilla-belle-681023_592_336.jpg";
const data = [
  {
    id: 1,
    name: "Dr. Sarah Catherine Hook",
    job: "Physiotherapist",
    rate: 4.5,
    image: Sarah,
  },
  {
    id: 2,
    name: "Dr. Isabelle Furhman",
    job: "Phyquiatric",
    rate: 5.0,
    image: Isabelle,
  },
  {
    id: 3,
    name: "Dr. Camille Belle",
    job: "Physiotherapist",
    rate: 4.0,
    image: Camille,
  },
  {
    id: 4,
    name: "Dr. Sarah Catherine Hook",
    job: "Physiotherapist",
    rate: 4.5,
    image: Sarah,
  },
  {
    id: 5,
    name: "Dr. Isabelle Furhman",
    job: "Phyquiatric",
    rate: 5.0,
    image: Isabelle,
  },
  {
    id: 6,
    name: "Dr. Camille Belle",
    job: "Physiotherapist",
    rate: 4.0,
    image: Camille,
  },
];

const CARDS = [
  {
    isDarkBlue: true,
    texto: "Start training",
    iconName: "hdd",
    iconTypy: "AntDesign",
  },
  {
    isDarkBlue: false,
    texto: "Start training",
    iconName: "hdd",
    iconTypy: "AntDesign",
  },
  {
    isDarkBlue: true,
    texto: "Start training",
    iconName: "hdd",
    iconTypy: "AntDesign",
  },
  {
    isDarkBlue: false,
    texto: "Start training",
    iconName: "hdd",
    iconTypy: "AntDesign",
  },
];

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="notifications-outline" size={35} color="#3764c2" />
        <Image
          style={styles.headerImage}
          source={{
            uri: Sarah,
          }}
        />
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello, </Text>
        <Text style={{ color: "#2b3941" }}>Alan</Text>
      </Text>
      {/* <View style={styles.cardContainer}>
        <View style={styles.cardIconContainer}>
          <AntDesign name="shoppingcart" size={30} color="#fff" />
        </View>
        <Text style={styles.cardText}>Start training</Text>
      </View> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 40 }}
      >
        {CARDS.map((card, index) => (
          <Card
            isDarkBlue={card.isDarkBlue}
            texto={card.texto}
            iconName={card.iconName}
            iconTypy={card.iconTypy}
            key={index}
          />
        ))}
        {/* <Card
          isDarkBlue
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
        <Card
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
        <Card
          isDarkBlue
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
        <Card
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
        <Card
          isDarkBlue
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        /> */}
      </ScrollView>
      <Text style={styles.textHeader}>What are your symptomps</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <SymptomCard symptom="none" />
        <SymptomCard symptom="fever" />
        <SymptomCard symptom="flu" />
        <SymptomCard symptom="kys" />
        {/* <View style={styles.symptompsContainer}>
          <Text style={{ fontSize: 18, color: "#485258", fontWeight: "600" }}>
            I am fine
          </Text>
        </View>
        <View style={styles.symptompsContainer}>
          <Text style={{ fontSize: 18, color: "#485258", fontWeight: "600" }}>
            I am fine
          </Text>
        </View> */}
      </ScrollView>
      <View style={styles.therapistTitle}>
        <Text style={styles.textHeader}>Popular therapist</Text>
        <Text style={{ color: "#d4d4d7", fontWeight: "bold" }}>See all</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Therapist
            name={item.name}
            job={item.job}
            rate={item.rate}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Screen1;

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
    width: 50,
    height: 50,
    borderRadius: 50,
    // resizeMode: "center",
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
    fontWeight: "bold",
    color: "#495258",
  },
  symptompsContainer: {
    height: 50,
    width: 200,
    borderRadius: 40,
    backgroundColor: "#e6ecff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  therapistTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
});