// components/SearchBar.js

import { TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SearchBar() {
  return (
    <div className="flex items-center shadow-xl rounded-md bg-white p-3 space-x-4">
      {/* Job Title Input */}
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

      {/* Location Input */}
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

      {/* Search Button */}
      <Button
        variant="contained"
        color="error"
        className="text-white bg-red-600"
      >
        Search
      </Button>
    </div>
  );
}
