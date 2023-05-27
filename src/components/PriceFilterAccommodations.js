import React, { useContext, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import { AccommodationsContext } from '../contexts/AccommodationsContext';


const PriceFilterAccommodations = ({ onFilterChange }) => {
    const {minimumPrice, maximumPrice} = useContext(AccommodationsContext)
    const [minPrice, setMinPrice] = useState(minimumPrice)
    const [maxPrice, setMaxPrice] = useState(maximumPrice)

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
  };

  const handleFilterSubmit = () => {
    onFilterChange(minPrice, maxPrice);
    console.log(minPrice)
    console.log(maximumPrice)
  };

  return (
    <PriceFilterContainer>
      <SliderContainer>
        <p>Min. Price: {minPrice}</p>
        <StyledSlider min={0} max={maximumPrice} value={minPrice} onChange={handleMinPriceChange} />
      </SliderContainer>
      <SliderContainer>
        <p>Max. Price: {maxPrice}</p>
        <StyledSlider min={0} max={maximumPrice} value={maxPrice} onChange={handleMaxPriceChange} />
      </SliderContainer>
      <ApplyButton onClick={handleFilterSubmit}>Apply Filter</ApplyButton>
    </PriceFilterContainer>
  );
};
  
  export default PriceFilterAccommodations;

const PriceFilterContainer = styled.div`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  border: 5px double black;
  border-radius: 10px;
  width: 300px;
  height: 250px;
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  color: black;
  margin-right: 30px;
`;

const SliderContainer = styled.div`
  width: 200px;
`;

const StyledSlider = styled(Slider)`
  .rc-slider-rail {
    background-color: black;
    height: 6px; 
  }

  .rc-slider-track {
    background-color: white;
    height: 6px;
  }

  .rc-slider-handle {
    border-color: #48403f;
    background-color: #48403f;
  }
`;

const ApplyButton = styled.button`
  background-color: #48403f;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  height: 50px;
  font-size: 14px;
`;