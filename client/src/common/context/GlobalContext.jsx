import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState({});
  const [cityCode, setCityCode] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        cityCode,
        setCityCode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
