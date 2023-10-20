
//* Librerias a instalar
//npx expo install expo-file-system
//npx expo install expo-sharing
//npx expo install expo-media-library


import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TextFiles from './src/screens/TextFiles';
import { ImageFiles } from './src/screens/ImageFiles';

const Tab = createMaterialTopTabNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarStyle:{paddingTop: 40}}}>
        <Tab.Screen name='Text Files' component={TextFiles}/>
        <Tab.Screen name='Image Files' component={ImageFiles}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  inputs: {
    borderWidth: 1, 
    borderColor: '#2a2aff',
    paddingHorizontal: 15,
    borderRadius: 30,
    paddingVertical: 5,
    width: 300,
  },
});
