import React, {FC} from 'react';
import Box from '@mui/material/Box';
import {BoxWrapperProps} from "../../models/box"

const BoxWrapper: FC<BoxWrapperProps> = ({
  children, 
  height='100%', 
  minHeight=400, 
  backgroundColor='primary.50',
  backgroundHoverColor='primary.100',
  padding= 1,
  hover=true,
  }) => {
  return (
    <Box sx={{
      width: '100%',
      height,
      minHeight,
      boxSizing: 'border-box',
      padding,
      backgroundColor,
      '&:hover': {
        backgroundColor: hover ? backgroundHoverColor : backgroundColor,
        opacity: hover ? [0.9, 0.8, 0.7] : 1,
      },
    }}>
        {children}
    </Box>
  );  
}

export default BoxWrapper;