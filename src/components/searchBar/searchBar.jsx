"use client"

import { TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
        <TextField
          variant="outlined"
          size="small"
          placeholder="San Francisco, USA"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
          className="w-64"
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
