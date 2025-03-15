import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
