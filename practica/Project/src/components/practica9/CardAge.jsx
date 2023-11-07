import React from 'react'
import { View,Text } from 'react-native'
import { useAppContext } from '../../hooks/useAppContext'
import CardSchool from './CardSchool'

const CardAge = () => {
  const { person } = useAppContext();
  return (
    <View
      style={{
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 10,
      }}
    >
      <Text>Age: {person.age}</Text>
      <CardSchool />
    </View>
  );
};

export default CardAge
