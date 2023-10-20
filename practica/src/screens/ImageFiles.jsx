import React, { useState, useEffect, useRef } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { View, Button, Text } from 'react-native';
import { Image } from 'react-native';
import { Camera } from 'expo-camera';

export const ImageFiles = () => {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [libraryPermission, requestLibraryPerm] = ImagePicker.useMediaLibraryPermissions();
  const [imageData, setImageData] = useState();
  const [loadImage, setLoadImage] = useState();
  const [warning, setWarning] = useState('');
  const [cameraPermission, setCameraPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await requestPermission(); // Parametro writeOnly
        if (status !== 'granted') {
          setErrorMsg('Permission to access files was denied');
          return;
        }

        await requestLibraryPerm();

        if (libraryPermission.status !== 'granted') {
          console.log('Permission to access files was denied');
          return;
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken:', photo.uri);
      // Handle the taken photo here, like displaying it or saving it.
    }
  };

  const downloadImg = async (sharing) => {
    const fileName = 'imagenEjemplo.jpg';
    const img = 'https://i.imgflip.com/2/80vhtz.jpg';
    const result = await FileSystem.downloadAsync(
      img,
      FileSystem.documentDirectory + fileName
    );
    if (sharing) {
      share(result.uri);
    } else {
      save(result.uri);
    }
  };

  const share = (uri) => {
    Sharing.shareAsync(uri);
  };

  const save = async (uri) => {
    try {
      if (permissionResponse) {
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync('Downloads', asset);
        setWarning('Descarga completada, revisa tu carpeta "Descargas"');
      } else {
        await requestPermission();
      }
    } catch (error) {
      console.log(error);
      setWarning('Descarga Fallida');
    }
  };

  const openFile = async () => {
    try {
      if (libraryPermission) {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          quality: 1,
          exif: true,
        });

        if (!result.cancelled) {
          setImageData(result.assets[0]);
          setLoadImage(result.assets[0].uri);
        }
      } else {
        await requestLibraryPerm();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
      <View style={{ gap: 10 }}>
        <Button title="Descargar en Biblioteca" onPress={() => downloadImg(false)} />
        <Text>{warning}</Text>
        <Button title="Descargar y Compartir" onPress={() => downloadImg(true)} />
      </View>
      <View style={{ gap: 20, alignItems: 'center' }}>
        <Button title="Elegir imagen" onPress={() => openFile()} />
        <Button title="Take Photo" onPress={() => takePicture()} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: loadImage }} />
        <Text style={{ fontSize: 20 }}>Datos de la imagen</Text>
        <Text style={{ maxWidth: 300 }}>{JSON.stringify(imageData)}</Text>
      </View>
      <View>
        {/* <Text>Ancho: {imageData.width}</Text>
            <Text>Alto: {imageData.height}</Text>
            <Text>ID: {imageData.assetId}</Text>  */}
      </View>
      {cameraPermission !== 'granted' && <Text>Camera permission not granted.</Text>}
      <Camera style={{ width: 200, height: 200 }} type={Camera.Constants.Type.back} ref={cameraRef} />
    </View>
  );
};
