import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Home', 'About', 'Projects', 'Blog'];


interface HeaderProps {
  handleScroll: (target:string) => void
}


const Header = ({handleScroll}:HeaderProps) => {

  const handleMenuClick = (page: string) => {
    handleScroll(page)

  }
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {pages.map((page) => (
                  <MenuItem key={page} onClick={()=>handleMenuClick(page)}>
                    <Typography textAlign="center" >{page}</Typography>
                  </MenuItem>
                ))}
          </Toolbar>
        </AppBar>
      </Box>
  );
};
export default Header;