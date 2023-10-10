import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sample user data for demonstration
  const sampleUserData = {
    id: 1,
    username: "demoUser",
    email: "demo@example.com",
    password: "demoPassword",
  };

  // Function to register a new user
  const signUp = async (newUserData) => {
    try {
      const userData = {
        id: Date.now(),
        ...newUserData,
      };

      // Set the user state
      setUser(userData);

      return userData;
    } catch (error) {
      throw error;
    }
  };

  // Function to log in a user
  const login = async (loginData, userData) => {
    try {
      // Simulate a database query to check if email or username exists
      // In a real application, you would query your database or backend API
      if (
        (loginData.email === userData.email ||
          loginData.email === userData.username) &&
        loginData.password === userData.password
      ) {
        // If the email/username and password match, set the user state
        //setUser(sampleUserData);
        return userData;
      } else {
        throw new Error("Invalid credentials");
        // : (" + userData.email + ", " + userData.password + "), (" + loginData.email + ", " + loginData.password + ")" );
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
    login, // Expose the login function
    getUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
