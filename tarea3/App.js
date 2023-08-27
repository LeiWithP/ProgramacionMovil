import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StyledText, Papyrus } from './src/components/StyledText';
import { Sans } from './src/components/StyledButton';

export default function App() {
  const handleButtonPress = () => {
    console.log("You Win!");
  };

  return (
    <View style={styles.container}>
      <Papyrus style={styles.text}>Papyrus 2</Papyrus>
      <Sans onPress={handleButtonPress} title="Sans Button" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 5,
    padding: 5,
    marginTop: 7,
    borderColor: 'pink'
  },
  text: {
    color: 'purple',
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});