import React, { ReactChildren, ReactChild } from 'react';
import Box from '@mui/material/Box';

interface BoxWrapperProps {
    children: ReactChild | ReactChildren;
    height?: number | string;
    minHeight?: number | string;
  }


const BoxWrapper = ({children, height='100%', minHeight=400}:BoxWrapperProps) => {
  return (
      <Box sx={{
        width: '100%',
        height,
        minHeight,
        boxSizing: 'border-box',
        padding: 1,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
          {children}
      </Box>
  );
}

export default BoxWrapper;