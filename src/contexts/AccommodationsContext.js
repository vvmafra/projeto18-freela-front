import { createContext, useState } from 'react';

export const AccommodationsContext = createContext();

export const AccommodationsProvider = ({ children }) => {
  const [selectedAccommodation, setSelectedAccommodation] = useState({});
  const [accDetails, setAccDetails] = useState({})
  const [minimumPrice, setMinimumPrice] = useState(0)
  const [maximumPrice, setMaximumPrice] = useState(0)

  function saveAcc(acc) {
    setSelectedAccommodation(acc);
    console.log(selectedAccommodation)
  };

  return (
    <AccommodationsContext.Provider value={{ accDetails, setAccDetails, saveAcc, selectedAccommodation, setSelectedAccommodation, minimumPrice, setMinimumPrice, maximumPrice, setMaximumPrice}}>
      {children}
    </AccommodationsContext.Provider>
  );
};