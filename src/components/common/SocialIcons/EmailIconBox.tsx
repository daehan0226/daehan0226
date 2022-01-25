import React from 'react';


import { IconBoxProps } from '../../../models';
import EmailIcon from '@mui/icons-material/Email';
import SocialIconBox from './SocialIconBox';

const EmailIconBox = ({color}:IconBoxProps) => {
  return (
      <SocialIconBox color={color} >
        <EmailIcon 
          onClick={(e) => {
            window.location.href = `mailto:${process.env.REACT_APP_GMAIL}`;
            e.preventDefault();
          }}
        />
      </SocialIconBox>
  );
};

export default EmailIconBox;