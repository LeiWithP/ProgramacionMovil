import React from 'react'
import { View } from 'react-native'
import CardLocation from './CardLocation'
import { useAppContext } from '../../hooks/useAppContext'

const CardFooter = () => {
const {person} = useAppContext()

  return (
    <View>
        <CardLocation 
        person={person}
        />
    </View>
  )/
}

export default CardFooter
