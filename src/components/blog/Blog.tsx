import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common"

const Blog = ({refObject}:RefProps ) => {
  return (
    <div ref={refObject}>
      <BoxWrapper>
          <BoxHeader title={"Blog"} />
      </BoxWrapper>
    </div>
  );
}

export default Blog;
