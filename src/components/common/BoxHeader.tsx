import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { BoxHeaderProps } from '../../models/box';

const BoxHeader = ({
    title
  }:BoxHeaderProps) => {
  return (
      <>
        <Typography variant='h4' mt={1} sx={{color: 'grey.600'}} >{title}</Typography>
        <Divider sx={{backgroundColor: "grey.500" , borderBottomWidth: 5, width: title.length * 20, margin: '10px auto' }}/>
      </>
  );  
}

export default BoxHeader;