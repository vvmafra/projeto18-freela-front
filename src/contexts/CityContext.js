import { createContext, useState } from 'react';

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState({});

  function saveCity(cities) {
    setSelectedCity(cities);
  };

  return (
    <CityContext.Provider value={{ selectedCity, saveCity }}>
      {children}
    </CityContext.Provider>
  );
};