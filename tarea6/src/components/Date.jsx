import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Date = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="calendar" size={20} color="black" />
      <Text style={styles.text}>Today</Text>
      <FontAwesome name="clock-o" size={20} color="black" />
      <Text style={styles.text}>10:11:00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8b195',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 220,
    padding: 16,
    borderRadius: 14,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Date;
