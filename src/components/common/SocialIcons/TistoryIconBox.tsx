import React, {FC} from 'react';

import { IconBoxProps } from '../../../models';
import ArticleIcon from '@mui/icons-material/Article';
import SocialIconBox from './SocialIconBox';

const TistoryIconBox = ({color}:IconBoxProps) => {
  return (
      <SocialIconBox link={process.env.REACT_APP_GITHUB} color={color}>
        <ArticleIcon />
      </SocialIconBox>
  );
};

export default TistoryIconBox;