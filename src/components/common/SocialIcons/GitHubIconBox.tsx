import React, {FC} from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import SocialIconBox from './SocialIconBox';

const GitHubIconBox: FC = () => {
  return (
      <SocialIconBox link={process.env.REACT_APP_GITHUB}>
        <GitHubIcon />
      </SocialIconBox>
  );
};

export default GitHubIconBox;