import styled from 'styled-components'
import image from '../photos/trip_photo.jpg'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CityContext } from '../contexts/CityContext'

export default function HomePage(){
    const [options, setOptions] = useState([])
    const [showOptions, setShowOptions] = useState(false)
    const {saveCity, selectedCity} = useContext(CityContext)
    const navigate = useNavigate()

    useEffect(()=> {
        const promise = axios.get("https://travelagency-api-86py.onrender.com/cities")
        promise.then(res => {
            console.log(res.data)
            setOptions(res.data)
        })
        promise.catch(err => {
            console.error(err)
        })
    }, [])

    function handleClick(){
        setShowOptions(!showOptions)
    }

    function selectCity(cities){
        saveCity(cities)
        console.log(selectedCity)
        navigate(`/flights/${cities.id}`)
    }

    return (
        
            <BackgroundImage>
                <MenuTop>
                    Travel Agency
                </MenuTop>
                <Container>
                    <Box onClick={handleClick}>
                        Cities Avaiable{'\u00A0\u00A0\u00A0'}|{'\u00A0\u00A0\u00A0'}Country
                    </Box>
                    {showOptions && (
                        <OptionList>
                        {options.map(cities => (
                            <OptionItem key={cities.id}  onClick={() => selectCity(cities)}>{cities.name}{'\u00A0\u00A0\u00A0'}|{'\u00A0\u00A0\u00A0'}{cities.country} </OptionItem>
                        ))}
                            </OptionList>
                        )}
                </Container>
            </BackgroundImage>
       
    )
}

const BackgroundImage = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    padding-top: 30px;
`

const MenuTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50vw;
    height: 10vh;
    background-color: transparent;
    border: 7px solid #48403f;
    margin: auto;
    font-family: 'PT Sans', sans-serif;
    font-size: 28px;
    color: #48403f;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  color: white;
`;

const Box = styled.div`
  width: 300px;
  height: 8vh;
  background-color: #48403f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
`;

const OptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 300px;
  background-color: #48403f;
  border: 1px solid gray;
  text-align: center;
`;

const OptionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #48403f;
    color: white;
  }
`;