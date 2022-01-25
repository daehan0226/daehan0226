import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import {RefProps} from "../../models"
import ArrowIcon from '../common/ArrowIcon';
import { EmailIconBox, GitHubIconBox, TistoryIconBox } from '../common/SocialIcons';


const Home = ({refObject, handleScroll}:RefProps ) => {

  const handleArrowClick = () => {
    if (handleScroll) {
      handleScroll("About")
    }
  }
  
  return (
    <div ref={refObject} style={{position: 'relative', height: '90vh'}}>
      <Box sx={{
        backgroundColor:'primary.50',
        margin: 'auto 0',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }} >
        <Typography variant='h3'>Hi! I'm Daehan Lee</Typography>
        <Typography variant='body1'>I'm web developer based in South Korea</Typography>
        <Box sx={{
          width: 150,
          mt: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <GitHubIconBox color="primary" />
          <EmailIconBox color="primary" />
          <TistoryIconBox color="primary" />
        </Box>
      
      </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-60px',
          }}>
            <ArrowIcon up={false} handleClick={handleArrowClick} />
          </Box>
    </div>
  );
}

export default Home;
