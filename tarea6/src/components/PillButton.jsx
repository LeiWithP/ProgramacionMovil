import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PillButton = ({ onPress, title, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.buttonText, { color: 'white' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 200,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PillButton;
