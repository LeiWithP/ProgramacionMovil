
//* Librerias a instalar
//npx expo install expo-file-system

import * as FileSystem from 'expo-file-system';

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TextFiles() {
  const [myText, setMyText] = useState('')
  const [myTitle, setMyTitle] = useState('')
  const [searchFile, setSearchFile] = useState('')
  const [fileContent, setFileContent] = useState('')
  const [fileData, setFileData] = useState('')

  const WriteFile = async () => {
    try {
        let fileUri = FileSystem.documentDirectory + myTitle + ".txt";
        await FileSystem.writeAsStringAsync(fileUri, myText, { encoding: FileSystem.EncodingType.UTF8 });
    } catch (error) {
      console.log(error) 
    }  
  }


  const readFile = async () => {
    try {
        setFileContent('')
        let fileUri = FileSystem.documentDirectory + searchFile + ".txt"
        const info = await FileSystem.getInfoAsync(fileUri)
        setFileData(info)
        const doc = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.UTF8 }) 
        setFileContent(doc)
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <View style={styles.container}>
      <View style={{gap: 5}}>
        <Text>Titulo</Text>
        <TextInput value={myTitle} onChangeText={(value) => setMyTitle(value)} style={styles.inputs}/>
        <Text>Contenido</Text>
        <TextInput value={myText} onChangeText={(value) => setMyText(value)} style={styles.inputs}/>
        <Button title='Guardar Texto' onPress={WriteFile}/>
      </View>
      <View style={{gap: 5}}>
        <Text>Buscar Archivo</Text>
        <TextInput value={searchFile} onChangeText={(value) => setSearchFile(value)} style={styles.inputs}/>
        <Button title='Buscar Archivo' onPress={() => readFile()}/>
      </View>
      <View>
        <Text>Titulo: {searchFile}</Text>
        <Text>Contenido:</Text>
        <View style={styles.fileContainer}>
            <Text>{JSON.stringify(fileContent)}</Text>
        </View>
        <Text>Atributos</Text>
        <View style={styles.fileContainer}>
            <Text>{JSON.stringify(fileData)}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
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
  fileContainer:{
    maxWidth: 350,
    borderRadius: 40,
    borderColor: '#2a2aff',
    borderWidth: 1,
    padding: 20
  }
});
