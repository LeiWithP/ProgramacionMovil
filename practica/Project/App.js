import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/store';
import Counter from './src/counter';

//* Redux
//npm install @reduxjs/toolkit
//npm install react-redux



export default function App() {

  const count = useSelector((state) => state.counter.value)

  return (
    <Provider store={store}>
        <Counter/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 40,
    fontWeight: '700'
  }
});
