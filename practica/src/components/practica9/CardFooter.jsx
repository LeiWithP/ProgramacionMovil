import React from 'react'
import { View } from 'react-native'
import { useAppContext } from '../../hooks/useAppContext'
import CardLocation from './CardLocation'

const CardFooter = () => {
const {person} = useAppContext()

  return (
    <View>
        <CardLocation 
        person={person}
        />
    </View>
  )
}

export default CardFooter
