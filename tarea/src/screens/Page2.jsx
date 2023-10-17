import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import getStyles from "../styles/Styles1";
import SearchBar from "../components/SearchBar";
import Tag from "../components/Tag";
import FoodCard from "../components/FoodCard";
import BottomNavBar from "../components/BottomNavBar";

const Page3 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useTheme();

  const localStyles = StyleSheet.create({
    rightText: {
      color: theme.secondary,
      width: 320,
      fontSize: 14,
      fontWeight: "400",
      textAlign: "right",
    },
    image: {
      width: "100%",
      height: 250,
      marginTop: -60,
      borderBottomLeftRadius: 120,
      borderBottomRightRadius: 120,
    },
    tagsContainer: {
      height: 100,
      flexDirection: "row",
      alignItems: "center",
    },
    cardsContainer: {
      height: 280,
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ height: 26 }} />
      <Text style={styles.leftSubTitle}>Store for fast food & etc.</Text>
      <View style={{ height: 26 }} />
      <SearchBar />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={localStyles.tagsContainer}
      >
        <View style={{ width: 32 }} />
        <Tag text="Burgers" />
        <Tag text="Sancks" />
        <Tag text="Drinks" />
        <Tag text="Burgers" />
        <Tag text="Sancks" />
        <Tag text="Drinks" />
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={localStyles.cardsContainer}
      >
        <View style={{ width: 32 }} />
        <FoodCard text="Chicken burger" price="24.99" />
        <FoodCard text="Chicken burger" price="24.99" />
        <FoodCard text="Chicken burger" price="24.99" />
        <FoodCard text="Chicken burger" price="24.99" />
      </ScrollView>
      <View style={{ height: 50 }} />
      <BottomNavBar />
    </View>
  );
};

export default Page3;
