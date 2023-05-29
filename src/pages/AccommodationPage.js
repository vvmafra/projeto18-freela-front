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
    const {selectedAccommodation, setAccDetails, accDetails} = useContext(AccommodationsContext)
    const {selectedCity} = useContext(CityContext)
    const id = selectedAccommodation.id

    useEffect(() => {
        axios.get(`https://travelagency-api-86py.onrender.com/accommodation/${id}`)
          .then((response) => {
            const details = response.data
            setAccDetails(details)
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
              <TableCharac>
                <p>Facilities</p>
                {accDetails.facilities.length === 0 ? (
                  <li>No facilities registered from this accommodation</li>
                ):(
                accDetails.facilities.map((fac) => (
                  <li>{fac.name}</li>
                ))
                )}
              </TableCharac>
              <TableCharac>
                <p>Characteristics</p>
                <li>City: {accDetails.city}</li>
                <li>Price per day: € {accDetails.pricePerDay}</li>
                <li>Description: {accDetails.description}</li>
              </TableCharac>
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
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const TableCharac = styled.div`
    background-color: rgba(211, 211, 211, 0.9);;
    width: 320px;
    height: 350px;
    margin-top: 10px;
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    color: black;
    text-align: center;
    border-radius: 70px;
    box-sizing: border-box;
    padding: 15px;
    border: 4px solid black;
    p {
        font-size: 22px;
        font-weight: bold;
    }
    li {
      list-style-type: circle;
      margin-top: 12px;
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