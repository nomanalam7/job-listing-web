import { AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static" className="bg-blue-900">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-white">Find Your Dream Job</Typography>
        <div className="flex items-center space-x-4">
          <SearchIcon className="text-white" />
          <Button color="inherit">Jobs</Button>
          <Button color="inherit">Resumes</Button>
          <Avatar src="/path-to-image" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
