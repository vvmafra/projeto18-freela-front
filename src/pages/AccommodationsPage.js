import styled from "styled-components";
import hotel from "../photos/hotel-bell.jpg"
import MenuTop from "../components/MenuTop";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineLeftSquare } from "react-icons/ai";
import { FlightsContext } from "../contexts/FlightsContext";
import { CityContext } from "../contexts/CityContext";
import axios from "axios";
import { AccommodationsContext } from "../contexts/AccommodationsContext";
import PriceFilterAccommodations from "../components/PriceFilterAccommodations";

export default function AccommodationsPage() {
  const navigate = useNavigate()
  const [accommodations, setAccommodations] = useState([])
  const [filteredAcc, setFilteredAcc] = useState([])
  const { selectedFlight } = useContext(FlightsContext)
  const { selectedCity } = useContext(CityContext)
  const { saveAcc, setMinimumPrice, setMaximumPrice, setAccDetails } = useContext(AccommodationsContext)
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    axios.get(`https://travelagency-api-86py.onrender.com/accommodations/${selectedCity.id}`)
      .then((response) => {
        const maximumPrice = response.data.maxPrice
        setMaximumPrice(maximumPrice)

        const minimumPrice = response.data.minPrice
        setMinimumPrice(minimumPrice)

        setAccommodations(response.data.accommodations)
        setFilteredAcc(response.data.accommodations)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false)
      });
  }, [location, selectedCity.id, setMaximumPrice, setMinimumPrice]);

  const handleFilterChange = (minPrice, maxPrice) => {
    const filteredAcc = accommodations.filter((acc) => {
      const price = acc.pricePerDay;
      return price >= minPrice && price <= maxPrice;
    });
    setFilteredAcc(filteredAcc);

  };

  function selectAcc(acc) {
    saveAcc(acc)

    axios.get(`https://travelagency-api-86py.onrender.com/accommodation/${acc.id}`)
      .then((response) => {
        const details = response.data
        setAccDetails(details)
        navigate(`/accommodation/${acc.id}`)
      })
      .catch((error) => {
        console.error(error)
      })

  }

  function returnPage() {
    navigate(`/flight/${selectedFlight.id}`)
  }

  function home() {
    navigate("/")
  }


  return (
    <BackgroundImage>
      <MenuTop />
      <MenuContainer>
        <PriceFilterAccommodations onFilterChange={handleFilterChange} />
        <AccContainer>
          <p> Accommodations in : {selectedCity.name}{'\u00A0\u00A0\u00A0'}|{'\u00A0\u00A0\u00A0'}Country : {selectedCity.country} </p>
          {loading ? (
            <LoadingContainer>
              <LoadingSpinner />
            </LoadingContainer>
          ) : (
            <AccOptions filteredAcc={filteredAcc}>
              {filteredAcc.length === 0 ? (
                <li>{`No Accommodations avaiable in ${selectedCity.name} for this range`}</li>
              ) : (
                filteredAcc.map((acc) => (

                  <AccTag key={acc.id} onClick={() => selectAcc(acc)}>
                    <p>Name: {acc.name}</p>
                    <p>Price per day: € {acc.pricePerDay}</p>
                  </AccTag>
                )))}
            </AccOptions>)}
        </AccContainer>
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
  )
}

const BackgroundImage = styled.div`
    background-image: url(${hotel});
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

const AccContainer = styled.div`
  width: 70vw;
  height: 75vh;
  p {
    font-family: 'PT Sans', sans-serif;
    font-size: 24px;
    color: black;
  }
`
const AccTag = styled.div`
  width: 300px;
  height: 150px;
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

const AccOptions = styled.div`
  width: 70vw;
  height: 65vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 30px;
  justify-content: ${(props) => (props.filteredAcc.length === 0 ? "center" : "space-between")};
  align-items: ${(props) => (props.filteredAcc.length === 0 ? "center" : "")};
  li {
    font-family: 'PT Sans', sans-serif;
    font-size: 24px;
    color: black;
  }
`;





const MenuBottomContainer = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    min-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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