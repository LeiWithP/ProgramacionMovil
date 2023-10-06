import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, useTheme } from './src/components/ThemeProvider';
import MainPage from './src/screens/MainPage';
import PageOne from './src/screens/PageOne';
import PageTwo from './src/screens/PageTwo';
import CustomHeader from './src/components/CustomHeader';

const Stack = createStackNavigator();

const lightTheme = {
  colors: {
    primary: '#d6ffad',
    secondary: '#dbdbdb',
    text: '#000000',
    background: '#ffffff',
  },
};

const darkTheme = {
  colors: {
    primary: '#d6ffad',
    secondary: '#212121',
    text: '#ffffff',
    background: '#000000',
  },
};

function App() {
  const [activeTheme, setActiveTheme] = useState(lightTheme); // Initialize with the light theme

  const toggleTheme = () => {
    setActiveTheme(activeTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerStyle: {
              backgroundColor: activeTheme.colors.background,
            },
            headerTitleStyle: {
              display: 'none',
            },
          }}
        >
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{
              header: (props) => (
                <CustomHeader {...props} title="" toggleTheme={toggleTheme} />
              ),
            }}
          />
          <Stack.Screen
            name="Page One"
            component={PageOne}
            options={{
              header: (props) => (
                <CustomHeader {...props} title="" toggleTheme={toggleTheme} />
              ),
            }}
          />
          <Stack.Screen
            name="Page Two"
            component={PageTwo}
            options={{
              header: (props) => (
                <CustomHeader {...props} title="Send" toggleTheme={toggleTheme} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
