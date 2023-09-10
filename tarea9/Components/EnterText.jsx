import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const EnterText = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Enter ${label}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingVertical: 8,
    fontSize: 16,
    width: 300,
    opacity: 0.3,
  },
});

export default EnterText;
