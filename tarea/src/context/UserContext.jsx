import React, { createContext, useContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // Initialize user state with null or fetch it from SecureStore
  const [user, setUser] = React.useState(null);

  // Load the user data from SecureStore when the component is mounted
  useEffect(() => {
    (async () => {
      try {
        const userData = await SecureStore.getItemAsync("user_data");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    })();
  }, []);

  // Function to register a new user
  const signUp = async (newUserData) => {
    try {
      const userData = {
        id: Date.now(),
        ...newUserData,
      };

      // Store the user data in SecureStore
      await SecureStore.setItemAsync("user_data", JSON.stringify(userData));

      // Set the user state
      setUser(userData);

      return userData;
    } catch (error) {
      throw error;
    }
  };

  // Function to log in a user
  const login = async (loginData) => {
    try {
      const userDataJSON = await SecureStore.getItemAsync("user_data");
      console.log("User: ", JSON.parse(userDataJSON));

      if (!userDataJSON) {
        throw new Error("User data not found. Please sign up.");
      }

      const userData = JSON.parse(userDataJSON);

      if (
        (loginData.email === userData.email ||
          loginData.email === userData.username) &&
        loginData.password === userData.password
      ) {
        return userData;
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      throw error;
    }
  };

  // Function to get the user data
  const getUserData = () => {
    return user;
  };

  const value = {
    user,
    signUp,
    login,
    getUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
