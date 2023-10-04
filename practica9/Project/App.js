import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View } from "react-native";
import { THEME } from "./src/theme/styles";
import { Constants } from "expo-constants";
import Card from "./src/components/practica9/Card";
import AppContextProvider from "./src/context/AppContext";

const person = {
  id: 1,
  name: "Juan",
  lastname: "Perez",
  age: 25,
  city: "Mexico",
  country: "Mexico",
};

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <Card person={person} />
      </View>
    </AppContextProvider>
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
