import { createContext, useState } from 'react';

export const FlightsContext = createContext();

export const FlightsProvider = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState({});
  const [minimumPrice, setMinimumPrice] = useState(0)
  const [maximumPrice, setMaximumPrice] = useState(100)

  function saveFlight(flight) {
    setSelectedFlight(flight);
  };

  return (
    <FlightsContext.Provider value={{ selectedFlight, saveFlight, setSelectedFlight, minimumPrice, setMinimumPrice, maximumPrice, setMaximumPrice }}>
      {children}
    </FlightsContext.Provider>
  );
};