import React from 'react'
import { View, StyleSheet } from 'react-native';
import LoginHeader from '../components/Login/LoginHeader'
import LoginContent from '../components/Login/LoginContent'

const Login = () => {
  return (
    <View style={styles.container}>
        <LoginHeader/>
        <LoginContent/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})

export default Login