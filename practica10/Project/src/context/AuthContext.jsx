import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogin = (username, password) => {
    if (username === "Eder" && password === "1234") {
      setUser({
        username,
        password,
      });
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };