import React from 'react';

import { IconBoxProps } from '../../../models';
import ArticleIcon from '@mui/icons-material/Article';
import SocialIconBox from './SocialIconBox';

const TistoryIconBox = ({color}:IconBoxProps) => {
  return (
      <SocialIconBox color={color}>
          <ArticleIcon onClick={(e) => {
            window.location.href=process.env.REACT_APP_TISTORY
            e.preventDefault();
          }}/>
      </SocialIconBox>
  );
};

export default TistoryIconBox;