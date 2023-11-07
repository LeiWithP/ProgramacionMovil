import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const NumberButton = ({ text, role, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, role=== 'number'? styles.numberContainer : role=== 'operator'? styles.operatorContainer : styles.functionContainer ]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 80,
        height: 80,
        alignItems: 'center',
        borderRadius: 10, 
        justifyContent: 'center',
    },
    text:{
        fontSize: 40,
        color: 'white',
    },
    numberContainer:{
        backgroundColor: 'blue',
    },
    operatorContainer:{
        backgroundColor: '#fb0475'
    },
    functionContainer:{
        backgroundColor: '#d9d9d9'
    }
})