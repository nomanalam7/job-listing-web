import { Chip, Avatar } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <Avatar src={job.companyLogo} />
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-500">{job.company}</p>
        </div>
      </div>

      <p>{job.description}</p>

      <div className="flex space-x-4">
        {job.tags.map((tag, index) => (
          <Chip key={index} label={tag} />
        ))}
      </div>

      <div className="text-right">
        <span className="text-gray-500">{job.salary}</span>
      </div>
    </div>
  );
};

export default JobCard;
