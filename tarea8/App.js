import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './src/components/ThemeProvider';
import MainPage from './src/screens/MainPage';
import PageOne from './src/screens/PageOne';
import PageTwo from './src/screens/PageTwo';
import CustomHeader from './src/components/CustomHeader';

const Stack = createStackNavigator();

const theme = {
  colors: {
    primary: '#d6ffad',
    secondary: '#212121',
    text: '#ffffff',
    background: '#000000',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerTitleStyle: {
              display: 'none', // Hide the default header title
            },
          }}
        >
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{ header: (props) => <CustomHeader {...props} title="Main" /> }}
          />
          <Stack.Screen
            name="Page One"
            component={PageOne}
            options={{ header: (props) => <CustomHeader {...props} title="Page One" /> }}
          />
          <Stack.Screen
            name="Page Two"
            component={PageTwo}
            options={{ header: (props) => <CustomHeader {...props} title="Send" /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
