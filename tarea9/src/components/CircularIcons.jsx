import React from 'react';
import { View, StyleSheet } from 'react-native';

const CircularIcons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1}>
        {/* <Image
          source={require('../../assets/icon.png')}
          style={styles.icon}
        /> */}
      </View>
      <View style={styles.circle2}>
        {/* <Image
          source={require('../../assets/icon.png')}
          style={styles.icon}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    width: 100,
    height: 70,
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'orange',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
  circle2: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: 'yellow',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 40,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default CircularIcons;
