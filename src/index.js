import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CityProvider } from './contexts/CityContext';
import { FlightsProvider } from './contexts/FlightsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlightsProvider>
      <CityProvider>
        <App />
      </CityProvider>
    </FlightsProvider>
  </React.StrictMode>
);