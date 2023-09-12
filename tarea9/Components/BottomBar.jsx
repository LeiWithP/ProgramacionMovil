import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="home" size={40} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Entypo name="grid" size={40} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="md-heart" size={40} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <MaterialCommunityIcons name="account" size={40} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    width: 300,
  },
  iconContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomBar;
