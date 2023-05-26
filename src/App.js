import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage'
import FlightPage from "./pages/FlightPage";
import { useContext } from "react";
import { CityContext } from "./contexts/CityContext";
import { FlightsContext } from "./contexts/FlightsContext";


function App() {
  const {selectedCity} = useContext(CityContext)
  const {selectedFlight} = useContext(FlightsContext)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path={`/flights/${selectedCity.id}`} element={<FlightsPage/>}/>
          <Route path={`/flight/${selectedFlight.id}`} element={<FlightPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
