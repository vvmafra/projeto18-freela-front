import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path={`/flights/`} element={<FlightsPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
