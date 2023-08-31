import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.top}>Sign in to your Account</Text>
      <Text style={styles.bottom}>Sign in to your Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00004B',
    width: '100%',
    height: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  top: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '500',
  },
  bottom: {
    color: '#E3E3E3',
    fontSize: 14,
  }
})

export default LoginHeader