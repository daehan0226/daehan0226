import React, {FC} from 'react';
import Box from '@mui/material/Box';
import {BoxWrapperProps} from "../../models/box"

const BoxWrapper: FC<BoxWrapperProps> = ({
  children, 
  height='100%',
  backgroundColor='primary.100',
  backgroundHoverColor='primary.50',
  padding= 1,
  hover=true,
  }) => {
  return (
    <Box sx={{
      width: '100%',
      height,
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