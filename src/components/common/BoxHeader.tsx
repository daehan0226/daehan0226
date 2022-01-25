import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { BoxHeaderProps } from '../../models/box';

const BoxHeader = ({
    title,
    color='primary.700',
    divierColor='primary.700'
  }:BoxHeaderProps) => {
  return (
      <>
        <Typography 
          variant='h4' 
          mt={1} 
          sx={{
            color,
          }} 
        >{title}</Typography>
        <Divider 
          sx={{
            backgroundColor: divierColor, 
            borderBottomWidth: 5, 
            width: title.length * 20, 
            margin: '10px auto',
            marginBottom: 6
          }}/>
      </>
  );  
}

export default BoxHeader;