import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CityProvider } from './contexts/CityContext';
import { FlightsProvider } from './contexts/FlightsContext';
import { AccommodationsProvider } from './contexts/AccommodationsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AccommodationsProvider>
    <FlightsProvider>
    <CityProvider>
        <App />
    </CityProvider>
    </FlightsProvider>
    </AccommodationsProvider>
  </React.StrictMode>
);