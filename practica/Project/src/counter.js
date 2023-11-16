import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { decrement, incrementByAmount } from './features/counter/counterSlice';

//* Redux
//npm install @reduxjs/toolkit
//npm install react-redux



export default function Counter() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const decrementValue= () => dispatch(decrement())
  const incrementValue= () => dispatch(increment())
  const incrementByValue= () => dispatch(incrementByAmount({action:2}))

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Counter Value: {count}</Text>

        <TouchableOpacity onPress={incrementValue}>
          <Text style={{fontSize: 20}}>Increment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={decrementValue}>
          <Text style={{fontSize: 20}}>Decrement</Text>
        </TouchableOpacity>
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
  },
  title:{
    fontSize: 40,
    fontWeight: '700'
  }
});
