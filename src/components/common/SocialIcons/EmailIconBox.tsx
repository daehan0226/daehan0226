import React, {FC} from 'react';

import { IconBoxProps } from '../../../models';
import EmailIcon from '@mui/icons-material/Email';
import SocialIconBox from './SocialIconBox';

const EmailIconBox = ({color}:IconBoxProps) => {
  return (
    <div onClick={(e) => {
      window.location.href = `mailto:${process.env.REACT_APP_GMAIL}`;
      e.preventDefault();
    }}>
      <SocialIconBox link={"#"} color={color} >
        <EmailIcon />
      </SocialIconBox>
    </div>

  );
};

export default EmailIconBox;