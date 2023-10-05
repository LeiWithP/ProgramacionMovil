import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "./src/components/ThemeProvider";
import MainPage from "./src/screens/MainPage";
import PageOne from "./src/screens/PageOne";
import PageTwo from "./src/screens/PageTwo";

const Stack = createStackNavigator();

const theme = {
  colors: {
    primary: "#d6ffad",
    secondary: "#212121",
    text: "#ffffff",
    background: "#000000",
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
              color: 'white',
              
            },
          }}
        >
          <Stack.Screen name="Main" component={MainPage} />
          <Stack.Screen name="Page One" component={PageOne} />
          <Stack.Screen
            name="Page Two"
            component={PageTwo}
            options={{
              title: "Send",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
