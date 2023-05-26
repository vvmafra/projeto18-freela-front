import styled from 'styled-components'
import image from '../photos/trip_photo.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function FlightsPage(){
    const navigate = useNavigate()



    return (
        <BackgroundImage>
            <MenuTop>
                Travel Agency
            </MenuTop>
            <Container>
                <Box>
                    Cities Avaiable | Country
                </Box>
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