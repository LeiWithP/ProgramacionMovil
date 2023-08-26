import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StyledText } from './src/components/StyledText';

export default function App() {
  return (
    <View style={styles.container}>
      <StyledText text="Custom Styled Text" fontSize={40} fontWeight='bold'/>
      <StyledText text="Custom Styled Text" fontSize={10}/>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Press')}>
        <Text>Button</Text>
      </TouchableOpacity> 
      <StatusBar style="auto"/>
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
    borderWidth: 3,
    padding: 5
  }
});