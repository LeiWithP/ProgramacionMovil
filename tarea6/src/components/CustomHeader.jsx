import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomHeader = (onPress) => (
  <View style={styles.container}>
    <FontAwesome
      name="chevron-left"
      size={20}
      style={{ marginLeft: 10 }}
      
    />
    <Text style={styles.headerText}>
      $234 000 000
    </Text>
    <FontAwesome
      name="close"
      size={20}
      style={{ marginRight: 10 }}
      onPress={() => {
        // Handle close action
      }}
    />
  </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#c9c2a3",
        paddingTop: 50,
        alignItems: "center",
      },
      headerText: {
        flex: 1,
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',
      },
});

export default CustomHeader;
