import React, { ReactChildren, ReactChild } from 'react';
import Box from '@mui/material/Box';

interface BoxWrapperProps {
    children: ReactChild | ReactChildren;
    height?: number | string;
    minHeight?: number | string;
    backgroundColor?: string;
    backgroundHoverColor?: string;
  }


const BoxWrapper = ({
  children, 
  height='100%', 
  minHeight=400, 
  backgroundColor='primary.dark',
  backgroundHoverColor='primary.main'
  }:BoxWrapperProps) => {
  return (
      <Box sx={{
        width: '100%',
        height,
        minHeight,
        boxSizing: 'border-box',
        padding: 1,
        backgroundColor,
        '&:hover': {
          backgroundColor: backgroundHoverColor,
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
          {children}
      </Box>
  );  
}

export default BoxWrapper;