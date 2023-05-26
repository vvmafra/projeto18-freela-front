import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage'
import { useContext } from "react";
import { CityContext } from "./contexts/CityContext";


function App() {
  const {selectedCity} = useContext(CityContext)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path={`/flights/${selectedCity.id}`} element={<FlightsPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
