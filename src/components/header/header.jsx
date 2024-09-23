"use client"
import { AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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

const hoverEffect = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

// Styled components with animations
const AnimatedAppBar = styled(AppBar)`
  animation: ${fadeIn} 1s ease-in-out;
`;

const AnimatedButton = styled(Button)`
  &:hover {
    animation: ${hoverEffect} 0.3s ease-in-out forwards;
  }
`;

const Header = () => {
  return (
    <AnimatedAppBar position="static" className="bg-blue-900">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-white">Find Your Dream Job</Typography>
        <div className="flex items-center space-x-4">
          <SearchIcon className="text-white" />
          <AnimatedButton color="inherit">Jobs</AnimatedButton>
          <AnimatedButton color="inherit">Resumes</AnimatedButton>
          <Avatar src="/path-to-image" />
        </div>
      </Toolbar>
    </AnimatedAppBar>
  );
}

export default Header;
