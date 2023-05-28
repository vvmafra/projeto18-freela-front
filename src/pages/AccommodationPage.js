import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MenuTop from '../components/MenuTop'
import resort from '../photos/resort.jpg'
import { useContext, useEffect, useState } from 'react'
import { AiOutlineHome, AiOutlineLeftSquare } from 'react-icons/ai'
import { CityContext } from '../contexts/CityContext'
import { AccommodationsContext } from '../contexts/AccommodationsContext'
import PhotosAcc from '../components/PhotosAcc'


export default function AccommodationPage(){
    const navigate = useNavigate()
    const {selectedAccommodation, setAccDetails} = useContext(AccommodationsContext)
    const {selectedCity} = useContext(CityContext)
    const id = selectedAccommodation.id

    useEffect(() => {
        axios.get(`https://travelagency-api-86py.onrender.com/accommodation/${id}`)
          .then((response) => {
            const details = response.data
            setAccDetails(details)
            console.log(response.data)
          })
          .catch((error) => {
            console.error(error)
          })
      }, [])

      function returnPage(){
        navigate(`/accommodations/${selectedCity.id}`)
      }

      function home(){
        navigate("/")
      }


    return(
        <BackgroundImage>
            <MenuTop/>
            <PhotosAcc/>
            <PageContainer>
            </PageContainer>
            <MenuBottomContainer>
                 <AiOutlineLeftSquare onClick={returnPage}
                    size={60}
                    style={{
                        color: "#000000"}}  />
                <AiOutlineHome onClick={home}
                    size={60}
                    style={{
                        color: "#000000"}} />            
            </MenuBottomContainer>
        </BackgroundImage>
    )
}

const BackgroundImage = styled.div`
    background-image: url(${resort});
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
  background-color: blue;
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