import React, {RefObject} from 'react';

import {RefProps} from "../../models"
import {BoxWrapper} from "../common"

const Blog = ({refObject}:RefProps ) => {
  return (
    <BoxWrapper>
        <h1 ref={refObject}>Blog</h1>
    </BoxWrapper>
  );
}

export default Blog;
