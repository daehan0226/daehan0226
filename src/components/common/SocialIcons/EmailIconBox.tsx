import React, {FC} from 'react';

import EmailIcon from '@mui/icons-material/Email';
import SocialIconBox from './SocialIconBox';

const EmailIconBox: FC = () => {
  return (
    <div onClick={(e) => {
      window.location.href = `mailto:${process.env.REACT_APP_GMAIL}`;
      e.preventDefault();
    }}>
      <SocialIconBox link={"#"} >
        <EmailIcon />
      </SocialIconBox>
    </div>

  );
};

export default EmailIconBox;