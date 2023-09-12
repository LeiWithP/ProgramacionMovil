import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SearchBox from "../Components/SearchBox";
import Tag from "../Components/Tag";
import Adjust from "../Components/Adjust";
import ProductCard from "../Components/ProductCard";
import BottomBar from "../Components/BottomBar";

function MainPage() {
  return (
    <View style={styles.container}>
      <View style={styles.evenContainer}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subtitle}>your products</Text>
        </View>
        <Text style={{ fontSize: 50 }}>👩‍🦰</Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View style={styles.evenContainer}>
          <SearchBox placeholder="Search..." />
          <Adjust />
        </View>
        <View style={styles.startContainer}>
          <Tag textTag="Miniso" />
          <Tag textTag="Neurso" />
        </View>
      </View>
      <Text style={styles.title2}>Popular Product</Text>
      <ScrollView style={{ marginLeft: 14 }} horizontal showsHorizontalScrollIndicator={false}>
      <ProductCard
        imageSource={require('../assets/old-camera.jpg')}
        tag="Portable FM"
        title="Divoom Radio"
        price="52.00"
      />
      <ProductCard
        imageSource={require('../assets/vintage-camera.jpg')}
        tag="Smallest FM"
        title="Manual FM"
        price="48.32"
      />
      <ProductCard
        imageSource={require('../assets/old-camera.jpg')}
        tag="Portable FM"
        title="Divoom Radio"
        price="52.00"
      />
      <ProductCard
        imageSource={require('../assets/vintage-camera.jpg')}
        tag="Smallest FM"
        title="Manual FM"
        price="48.32"
      />
      </ScrollView>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 40,
  },
  evenContainer: {
    width: 320,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  startContainer: {
    width: 320,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 26,
    fontWeight: "200",
  },
  title2: {
    fontSize: 26,
    fontWeight: "400",
    width: 320,
  },
});

export default MainPage;
