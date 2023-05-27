import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage'
import FlightPage from "./pages/FlightPage";
import AccommodationsPage from "./pages/AccommodationsPage"
import { useContext } from "react";
import { CityContext } from "./contexts/CityContext";
import { FlightsContext } from "./contexts/FlightsContext";
import { AccommodationsContext } from "./contexts/AccommodationsContext";
import AccommodationPage from "./pages/AccommodationPage";

function App() {
  const {selectedCity} = useContext(CityContext)
  const {selectedFlight} = useContext(FlightsContext)
  const {selectedAccommodation} = useContext(AccommodationsContext)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path={`/flights/${selectedCity.id}`} element={<FlightsPage/>}/>
          <Route path={`/flight/${selectedFlight.id}`} element={<FlightPage/>}/>
          <Route path={`/accommodations/${selectedCity.id}`} element={<AccommodationsPage/>}/>
          <Route path={`/accommodation/${selectedAccommodation.id}`} element={<AccommodationPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
