import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogin = async (username, password) => {
    if (username === "Eder" && password === "1234") {
      setUser(username);
      await AsyncStorage.setItem('user', username);
      return true;
    }
    return false;
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setUser("");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }
  , []);

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };