"use client"
import { TextField, Slider, Checkbox, FormControlLabel } from '@mui/material';
import { Work, WorkOutline, School, Home, Assignment } from '@mui/icons-material';
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

const Filter = () => {
  return (
    <AnimatedDiv className="flex flex-col p-6 bg-white rounded-lg shadow-lg space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <AnimatedItem className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg text-blue-600">Job Type</h3>
          <FormControlLabel control={<Checkbox icon={<WorkOutline />} checkedIcon={<Work />} />} label="Full Time Job" />
          <FormControlLabel control={<Checkbox icon={<WorkOutline />} checkedIcon={<Work />} />} label="Part Time Job" />
          <FormControlLabel control={<Checkbox icon={<School />} checkedIcon={<School />} />} label="Internship" />
          <FormControlLabel control={<Checkbox icon={<Home />} checkedIcon={<Home />} />} label="Remote Job" />
          <FormControlLabel control={<Checkbox icon={<Assignment />} checkedIcon={<Assignment />} />} label="Contract" />

          <h3 className="font-semibold text-lg text-blue-600">Salary</h3>
          <div className="flex flex-col space-y-2">
            <span>Minimum Salary</span>
            <TextField type="number" placeholder="Enter minimum salary" />
          </div>
          <div className="flex flex-col space-y-2">
            <span>Maximum Salary</span>
            <TextField type="number" placeholder="Enter maximum salary" />
          </div>
        </AnimatedItem>

        <AnimatedItem className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg text-blue-600">Experience Level</h3>
          <FormControlLabel control={<Checkbox />} label="Entry/Junior" />
          <FormControlLabel control={<Checkbox />} label="Middle" />
          <FormControlLabel control={<Checkbox />} label="Senior" />
        </AnimatedItem>
      </div>
    </AnimatedDiv>
  );
};

export default Filter;
