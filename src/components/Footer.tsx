import React, {FC} from 'react';
import Box from '@mui/material/Box';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';

import { IconBoxProps } from '../models';
import { Typography } from '@mui/material';


const IconBox = ({children}:IconBoxProps) => {

  return (
    <Box sx={{
      width: 55,
      height: 55,
      backgroundColor: 'grey.300',
      cursor: "pointer",
      '&:hover': {
        backgroundColor: "secondary.dark",
        boxShadow: "0 0 0 3px rgb(4 94 201 / 10%)",
        transform: "scale(0.9)",
      },
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s"
    }}>
      {children}
    </Box>
  )
}

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
      <IconBox>
        <Link href={process.env.REACT_APP_GITHUB} >
          <GitHubIcon />
        </Link>
      </IconBox>
      <IconBox>
        <Link href={process.env.REACT_APP_GMAIL}>
          <EmailIcon />
        </Link>
      </IconBox>
      </Box>  
      <Typography variant='body1' sx={{color: 'grey.100'}} >{process.env.REACT_APP_COPYRIGHT} {'\u00A9'}{new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer;