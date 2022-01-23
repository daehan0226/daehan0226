import React, {FC} from 'react';
import Box from '@mui/material/Box';

import { Typography } from '@mui/material';
import { EmailIconBox, GitHubIconBox } from './common/SocialIcons';


const Footer: FC = () => {
  return (
    <Box sx={{
      backgroundColor: "primary.main",
      width: '100%',
      padding: 1,
    }}>
      <Box sx={{
      width: 200,
      height: 200,
      margin: '0 auto',
      display: 'flex',
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <GitHubIconBox />
      <EmailIconBox />
      </Box>  
      <Typography variant='body1' sx={{color: 'grey.100'}} >{process.env.REACT_APP_COPYRIGHT} {'\u00A9'}{new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer;