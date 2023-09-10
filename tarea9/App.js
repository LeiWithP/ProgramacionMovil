import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './Screens/MainPage';
import PageOne from './Screens/PageOne';
import PageTwo from './Screens/PageTwo';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Sign In" component={PageOne} />
        <Stack.Screen name="Create Account" component={PageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
