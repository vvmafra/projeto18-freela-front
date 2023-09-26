import styled from "styled-components"
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillMessage } from 'react-icons/ai'

export default function MenuTop() {
    return (

        <TopMenu>
            <IconContainer>
                <AiFillFacebook size={40} />
                <AiFillInstagram size={40} />

            </IconContainer>

            <MenuTopContainer>
                VVM - Travel Agency
            </MenuTopContainer>

            <IconContainer>
                <AiFillTwitterSquare size={40} />
                <AiFillMessage size={40} />
            </IconContainer>
        </TopMenu>

    )
}

const TopMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const MenuTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50vw;
    height: 10vh;
    border: 7px solid black;
    margin: auto;
    font-family: 'PT Sans', sans-serif;
    font-size: 28px;
    color: black;
`

const IconContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 150px;
`