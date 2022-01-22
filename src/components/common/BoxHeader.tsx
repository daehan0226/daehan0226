import React from 'react';
import { Typography } from '@mui/material';
import { BoxHeaderProps } from '../../models/box';

const BoxHeader = ({
    title
  }:BoxHeaderProps) => {
  return (
        <Typography variant='h4' mt={1} sx={{color: 'grey.600'}} >{title}</Typography>
  );  
}

export default BoxHeader;