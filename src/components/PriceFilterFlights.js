import React, { useContext, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import { FlightsContext } from '../contexts/FlightsContext';

const PriceFilterFlights = ({ onFilterChange }) => {
  const { minimumPrice, maximumPrice } = useContext(FlightsContext)
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

export default PriceFilterFlights;

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
`;