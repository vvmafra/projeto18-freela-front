import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AccommodationsContext } from '../contexts/AccommodationsContext';

export default function PhotosAcc (){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { accDetails } = useContext(AccommodationsContext)
    const photos = accDetails.photos
  
    const handlePrevClick = () => {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentImageIndex < photos.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };
    
    const currentImage = photos[currentImageIndex];
  
    return (
      <ImageCarouselContainer>
        <p>{accDetails.name}</p>
        <ImagesButtons>
          <CarouselButton onClick={handlePrevClick}>&lt;</CarouselButton>
          <ImageContainer>
            <Image src={currentImage.url} alt="Imagem" />
          </ImageContainer>
          <CarouselButton onClick={handleNextClick}>&gt;</CarouselButton>
        </ImagesButtons>
      </ImageCarouselContainer>
    );
  };

  const ImageCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  background-color: rgba(211, 211, 211, 0.7);
  box-sizing: border-box;
  margin-top: 30px;
  p {
    font-family: 'PT Sans', sans-serif;
    font-style: italic;
    font-size: 24px;
    color: black;
  }
`;

const ImagesButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CarouselButton = styled.button`
  font-size: 40px;
  font-family: 'PT Sans', sans-serif;
  background: transparent;
  border: none;
  cursor: pointer;

`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  padding-right: 50px;
  padding-left: 50px;
`;
  