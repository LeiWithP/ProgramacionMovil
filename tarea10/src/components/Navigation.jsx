import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer"
import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Page3 from "../screens/Page3";
import Page4 from "../screens/Page4";
import { UserProvider } from "../context/UserContext";

import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Page1">
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
                  onPress={() => navigation.navigate("Page1")}
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
