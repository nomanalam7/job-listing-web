"use client"

import { TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Create styled components with animations
const AnimatedDiv = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

const AnimatedItem = styled.div`
  animation: ${slideIn} 0.5s ease-in-out;
`;

export default function SearchBar() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  console.log(countries, "countries");
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryOptions = response.data.map(country => ({
          value: country.cca2,
          label: country.name.common,
          flag: country.flags.svg // Add flag URL
        }));
        setCountries(countryOptions);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const customSingleValue = ({ data }) => (
    <div className="flex flex-row items-center">
      <img src={data.flag} alt="" className="w-5  mr-2" />
      {data.label}
    </div>
  );

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps} className="flex items-center p-2">
        <img src={data.flag} alt="" className="w-5  mr-2" />
        {data.label}
      </div>
    );
  };

  return (
    <AnimatedDiv className="flex items-center shadow-xl rounded-md bg-white p-3 space-x-4">
      {/* Job Title Input */}
      <AnimatedItem>
        <TextField
          variant="outlined"
          size="small"
          placeholder="UX Designer"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className="w-64"
        />
      </AnimatedItem>

      {/* Location Input */}
      <AnimatedItem>
        <Select
          options={countries}
          value={selectedCountry}
          onChange={setSelectedCountry}
          placeholder="Select countries"
          className="w-full cursor-pointer"
          components={{ SingleValue: customSingleValue, Option: customOption }} // Add custom components
          isMulti // Enable multiple selections
        />
      </AnimatedItem>

      {/* Search Button */}
      <AnimatedItem>
        <Button
          variant="contained"
          color="error"
          className="text-white bg-red-600"
        >
          Search
        </Button>
      </AnimatedItem>
    </AnimatedDiv>
  );
}
