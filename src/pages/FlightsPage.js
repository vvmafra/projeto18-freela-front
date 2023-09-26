import styled from 'styled-components'
import flightPhoto from '../photos/flight_photo.jpg'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import PriceFilterFlights from '../components/PriceFilterFlights'
import MenuTop from '../components/MenuTop'
import { CityContext } from '../contexts/CityContext'
import { FlightsContext } from '../contexts/FlightsContext'
import { AiOutlineHome, AiOutlineLeftSquare } from 'react-icons/ai'

export default function FlightsPage() {
  const navigate = useNavigate()
  const [items, setItems] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const { selectedCity } = useContext(CityContext)
  const { saveFlight, setMinimumPrice, setMaximumPrice } = useContext(FlightsContext)
  const [loading, setLoading] = useState(true)
  const location = useLocation()


  useEffect(() => {
    axios.get(`https://travelagency-api-86py.onrender.com/flights/${selectedCity.id}`)
      .then((response) => {
        const maxPrice = response.data.maxPrice

        const minPrice = response.data.minPrice

        setMaximumPrice(maxPrice)
        setMinimumPrice(minPrice)

        setItems(response.data.flights);
        setFilteredFlights(response.data.flights);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false)
      });
  }, [location, selectedCity.id, setMaximumPrice, setMinimumPrice]);

  const handleFilterChange = (minPrice, maxPrice) => {
    const filtered = items.filter((flight) => {
      const price = flight.price;
      return price >= minPrice && price <= maxPrice;
    });
    setFilteredFlights(filtered);

  };


  function selectFlight(flight) {
    saveFlight(flight)
    navigate(`/flight/${flight.id}`)
  }

  function returnPage() {
    navigate("/")
  }

  function home() {
    navigate("/")
  }

  return (
    <BackgroundImage>
      <MenuTop />
      <MenuContainer>
        <PriceFilterFlights onFilterChange={handleFilterChange} />
        <FlighsContainer>
          <p> Arrival City : {selectedCity.name}{'\u00A0\u00A0\u00A0'}|{'\u00A0\u00A0\u00A0'}Country : {selectedCity.country} </p>
          {loading ? (
            <LoadingContainer>
              <LoadingSpinner />
            </LoadingContainer>
          ) : (<>
            <FlightsOptions filteredFlights={filteredFlights}>
              {filteredFlights.length === 0 ? (
                <li key={filteredFlights.id}>No flights avaiable for this destination in this range</li>
              ) : (
                filteredFlights.map((flight) => (

                  <FlightTag key={flight.id} onClick={() => selectFlight(flight)}>
                    <p>Day: {flight.departureDay}</p>
                    <p>Time:  {flight.departureHour}</p>
                    <p>Price: € {flight.price}</p>
                    <p>Departure City: {flight.departureCity}</p>
                  </FlightTag>
                )))}
            </FlightsOptions>
          </>)}
        </FlighsContainer>
      </MenuContainer>
      <MenuBottomContainer>
        <AiOutlineLeftSquare onClick={returnPage}
          size={60}
          style={{
            color: "#000000",
            cursor: "pointer"
          }} />
        <AiOutlineHome onClick={home}
          size={60}
          style={{
            color: "#000000",
            cursor: "pointer"
          }} />
      </MenuBottomContainer>
    </BackgroundImage>
  );
}

const BackgroundImage = styled.div`
    background-image: url(${flightPhoto});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    padding-top: 30px;
`

const MenuContainer = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 80vh;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const FlighsContainer = styled.div`
  width: 70vw;
  height: 75vh;
  p {
    font-family: 'PT Sans', sans-serif;
    font-size: 24px;
    color: black;
  }
`

const FlightsOptions = styled.div`
  width: 70vw;
  height: 65vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 30px;
  justify-content: ${(props) => (props.filteredFlights.length === 0 ? "center" : "space-between")};
  align-items: ${(props) => (props.filteredFlights.length === 0 ? "center" : "")};
  li {
    font-family: 'PT Sans', sans-serif;
    font-size: 24px;
    color: black;
  }
`;

const FlightTag = styled.div`
  width: 350px;
  height: 180px;
  background-color: rgba(72,64,63, 1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: white;
  }
  p {
    font-size: 18px;
    margin: 0;
  }
`

const MenuBottomContainer = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    min-height: 20px;
    display: flex;
    justify-content: space-between;
    width: 80vw;
`

const LoadingContainer = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
`

const LoadingSpinner = styled.div`
  border: 5px solid black;
  border-top: 5px solid white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`