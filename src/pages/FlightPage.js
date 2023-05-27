import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MenuTop from '../components/MenuTop'
import airplane from '../photos/airplane.jpg'
import { useContext, useEffect, useState } from 'react'
import { FlightsContext } from '../contexts/FlightsContext'
import { AiOutlineHome, AiOutlineLeftSquare } from 'react-icons/ai'
import { CityContext } from '../contexts/CityContext'


export default function FlightPage(){
    const navigate = useNavigate()
    const {selectedFlight} = useContext(FlightsContext)
    const {selectedCity} = useContext(CityContext)
    const [flightDetails, setFlightDetails] = useState({})
    const id = selectedFlight.id

    useEffect(() => {
        axios.get(`https://travelagency-api-86py.onrender.com/flight/${id}`)
          .then((response) => {
            setFlightDetails(response.data)
          })
          .catch((error) => {
            console.error(error)
          })
      }, [])

      function returnPage(){
        navigate(`/flights/${selectedCity.id}`)
      }

      function home(){
        navigate("/")
      }

      function accommodations(){
        navigate(`/accommodations/${selectedCity.id}`)
      }

    return(
        <BackgroundImage>
            <MenuTop/>
                
            <PageContainer>
                <FlightContainer>
                    <h1>Flight number: 442{flightDetails.id}</h1>
                    <p>Arrival City: {flightDetails.arrivalCity}</p>
                    <p>Departure City: {flightDetails.departureCity}</p>
                    <p>Airline Company: {flightDetails.airline}</p>
                    <p>Departure Time: {flightDetails.timeDeparture}</p>
                    <p>Departure Day: {flightDetails.dayDeparture}</p>
                    <p>Arrival Time: {flightDetails.timeArrival}</p>
                    <p>Arrival Day: {flightDetails.dayArrival}</p>
                    <p>Price: € {flightDetails.price}</p>
                </FlightContainer>
            </PageContainer>
            <MenuBottomContainer>
                 <AiOutlineLeftSquare onClick={returnPage}
                    size={60}
                    style={{
                        color: "#000000"}}  />
                <ContainerChoose onClick={accommodations}>Choose an Accommodation</ContainerChoose>
                <AiOutlineHome onClick={home}
                    size={60}
                    style={{
                        color: "#000000"}} />            
            </MenuBottomContainer>
        </BackgroundImage>
    )
}

const BackgroundImage = styled.div`
    background-image: url(${airplane});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    padding-top: 30px;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlightContainer = styled.div`
    background-color: #f8a600;
    width: 400px;
    height: 470px;
    margin-top: 50px;
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    color: black;
    text-align: center;
    border-radius: 100px;
    box-sizing: border-box;
    padding: 10px;
    border: 4px solid black;
    p {
        font-size: 20px;
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
    align-items: center;
    width: 80vw;
`

const ContainerChoose = styled.button`
    padding: 10px;
    background-color: #48403f;
    color: white;
    font-family: 'PT Sans', sans-serif;
    font-size: 20px;
    border: 7px groove white;
    cursor: pointer;
    &:hover {
        background-color: #f8a600;
    }
`