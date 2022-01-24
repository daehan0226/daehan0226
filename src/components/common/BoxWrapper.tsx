import React, {FC} from 'react';
import Box from '@mui/material/Box';
import {BoxWrapperProps} from "../../models/box"

const BoxWrapper: FC<BoxWrapperProps> = ({
  children, 
  height='100%',
  backgroundColor='primary.100',
  padding= 1,
  hover=true,
  }) => {
  return (
    <Box sx={{
      width: '100%',
      height,
      boxSizing: 'border-box',
      padding,
      backgroundColor
    }}>
        {children}
    </Box>
  );  
}

export default BoxWrapper;