import styled from "styled-components"


export default function MenuBottom(){
    return (
        <MenuBottomContainer>
            ©2023 VVM - Travel Agency By Victor Mafra. All Rights Reserved. Designed By Victor Mafra
        </MenuBottomContainer>
    )  
}

const MenuBottomContainer = styled.div`
    position: absolute;
    background-color: white;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    min-height: 20px;
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    color: black;
`