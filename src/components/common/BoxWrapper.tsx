import React, { ReactChildren, ReactChild } from 'react';
import Box from '@mui/material/Box';

interface BoxWrapperProps {
    children: ReactChild | ReactChildren;
  }


const BoxWrapper = ({children}:BoxWrapperProps) => {
  return (
      <Box sx={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        minHeight: 400,
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