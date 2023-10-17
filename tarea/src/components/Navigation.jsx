import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "../screens/Loading";
import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Page3 from "../screens/Page3";
import Page4 from "../screens/Page4";
import { UserProvider } from "../context/UserContext";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const Navigation = () => {
  const logOut = async (navigation) => {
    try {
      await SecureStore.deleteItemAsync("user_data");
      console.log(`Item key deleted from SecureStore.`);
      navigation.navigate("Page1");
    } catch (error) {
      console.error(`Error deleting item: ${error.message}`);
    }
  };

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page1"
            component={Page1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page2"
            component={Page2}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 16 }}
                  onPress={() => logOut(navigation)}
                >
                  <Ionicons name="menu-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
              title: " ",
            })}
          />
          <Stack.Screen
            name="Page3"
            component={Page3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page4"
            component={Page4}
            options={{
              title: "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default Navigation;
