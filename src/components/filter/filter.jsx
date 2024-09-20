import { TextField, Slider, Checkbox, FormControlLabel } from '@mui/material';

const Filter = () => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg space-y-6">
      {/* Search Box */}
      <div className="flex space-x-4">
        <TextField fullWidth label="Job Title" variant="outlined" />
        <TextField fullWidth label="Location" variant="outlined" />
        <button className="bg-red-500 text-white px-4 py-2 rounded">Search</button>
      </div>

      {/* Filters */}
      <div className="flex space-x-6">
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold">Job Type</h3>
          <FormControlLabel control={<Checkbox />} label="Full Time Job" />
          <FormControlLabel control={<Checkbox />} label="Part Time Job" />
          <FormControlLabel control={<Checkbox />} label="Internship" />
          <FormControlLabel control={<Checkbox />} label="Remote Job" />
          <FormControlLabel control={<Checkbox />} label="Contract" />
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold">Salary</h3>
          <Slider defaultValue={2000} min={200} max={5000} valueLabelDisplay="auto" />
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold">Experience Level</h3>
          <FormControlLabel control={<Checkbox />} label="Entry/Junior" />
          <FormControlLabel control={<Checkbox />} label="Middle" />
          <FormControlLabel control={<Checkbox />} label="Senior" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
