import { createContext, useState } from "react";

const person = {
  id: 1,
  name: "Juan",
  lastname: "Perez",
  age: 25,
  city: "Morelia",
  country: "Mexico",
  school: "ITM",
  isActive: false,
};

export const AppContext = createContext();

import React from "react";

const AppContextProvider = ({ children }) => {
  const [person, setPerson] = useState(personObj);

  const handleIsActive = () => {
    setPerson({
      ...person,
      isActive: !person.isActive,
    });
  };

  const values = {
    person,
    handleIsActive,
  };

  return <AppContext.Provider value={person}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
