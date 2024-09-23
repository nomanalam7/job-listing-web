"use client"
import { Chip, Avatar, Button } from '@mui/material';
import { Work, AttachMoney } from '@mui/icons-material';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Define keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components with fade-in animation
const AnimatedDiv = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
`;

const AnimatedAvatar = styled(Avatar)`
  animation: ${fadeIn} 0.5s ease-out;
`;

const AnimatedChip = styled(Chip)`
  transition: transform 0.3s ease-in-out;
`;

const AnimatedButton = styled(Button)`
  transition: transform 0.3s ease-in-out;
`;

const JobCard = ({ job }) => {
  return (
    <AnimatedDiv className="bg-white p-6 rounded-lg shadow-2xl space-y-2">
      <div className="flex items-center space-x-4">
        <AnimatedAvatar src={job.companyLogo} className="border-2 border-blue-500 shadow-md" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
          <p className="text-lg text-gray-600">{job.company}</p>
        </div>
      </div>

      <p className="text-base text-gray-700">{job.description}</p>

      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag, index) => (
          <AnimatedChip
            key={index}
            label={tag}
            icon={<Work />}
            className="bg-blue-100 text-blue-800 shadow-sm"
          />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-lg flex items-center space-x-1 text-green-600 font-semibold">
          <AttachMoney />
          <span>{job.salary}</span>
        </span>
        <AnimatedButton
          variant="contained"
          className="bg-blue-500 text-white shadow-md"
        >
          Apply Now
        </AnimatedButton>
      </div>
    </AnimatedDiv>
  );
};

export default JobCard;
