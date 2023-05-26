import styled from "styled-components"

export default function MenuTop(){
    return (
        <MenuTopContainer>
            VVM - Travel Agency
        </MenuTopContainer>
    )  
}



const MenuTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50vw;
    height: 10vh;
    background-color: transparent;
    border: 7px solid black;
    margin: auto;
    font-family: 'PT Sans', sans-serif;
    font-size: 28px;
    color: black;
`