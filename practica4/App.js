import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Dimensions} from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  const { height, width } = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      <Login/>
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
});