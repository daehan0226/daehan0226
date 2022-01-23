import React, {FC} from 'react';

import { IconBoxProps } from '../../../models';
import GitHubIcon from '@mui/icons-material/GitHub';
import SocialIconBox from './SocialIconBox';

const GitHubIconBox = ({color}:IconBoxProps) => {
  return (
      <SocialIconBox link={process.env.REACT_APP_GITHUB} color={color}>
        <GitHubIcon />
      </SocialIconBox>
  );
};

export default GitHubIconBox;