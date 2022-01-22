import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';

import { BoxWrapper } from './common';

const Footer = () => {
  return (      
    <BoxWrapper height={100} minHeight={100}>
        <footer>
          <div>
            <div>
            <Link href={process.env.REACT_APP_GITHUB}>
              <GitHubIcon />
            </Link>
            </div>
            <div>
            <Link href={process.env.REACT_APP_GMAIL}>
              <EmailIcon />
            </Link>
            </div>
          </div>
        </footer>
    </BoxWrapper>
  );
};

export default Footer;