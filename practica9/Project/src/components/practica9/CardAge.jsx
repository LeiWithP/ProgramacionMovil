import React from 'react'
import { View } from 'react-native'
import { AppContext } from '../../context/AppContext'
import { useAppContext } from '../../hooks/useAppContext'

const CardAge = () => {
    const {person} = useAppContext()

  return (
    <View>
        <Text>Age: {person.age}</Text>
    </View>
  )
}

export default CardAge
