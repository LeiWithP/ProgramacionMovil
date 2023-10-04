import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View } from "react-native";
import { THEME } from "./src/theme/styles";
import { Constants } from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/practica5/HomeScreen";
import LoginScreen from "./src/screens/practica5/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: "Screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: THEME.COLORS.PRIMARY },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerLargeTitle: true,
              //title: "Home",
              // headerRight: () => <Text>Right</Text>,
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingTop: ReactStatus.currentHeight,
    backgroundColor: THEME.COLORS.WHITE,
  },
});

/*

const [screen, setScreen] = useState(1);

  onClickScreen1 = () => {
    setScreen(1);
  };

  onClickScreen2 = () => {
    setScreen(2);
  };

  onClickScreen3 = () => {
    setScreen(3);
  };
  
{
  screen === 1 ? (
  <WelcomeScreen onSignInPress={onClickScreen2} onSignUpPress={onClickScreen3}/>
  ) : screen === 2 ? (
  <SignInScreen onPress={onClickScreen1} />
  ) : (
  <SignUpScreen onPress={onClickScreen1} />
  )}
*/
