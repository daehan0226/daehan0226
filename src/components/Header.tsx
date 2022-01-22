import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';


import {ScrollTo} from "../ui/scroll"

const pages = ['Home', 'About', 'Projects', 'Blog'];

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

const Header = (props: Props) => {

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event)
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#about-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    }
  };
  return (
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {pages.map((page) => (
                  <MenuItem key={page} >
                    <Typography textAlign="center" onClick={handleClick}>{page}</Typography>
                    <ScrollTo scrollTo={"#about-anchor"} />
                  </MenuItem>
                ))}
          </Toolbar>
        </AppBar>
      </Box>
  );
};
export default Header;