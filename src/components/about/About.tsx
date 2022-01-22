import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common"

const About = ({refObject}:RefProps ) => {
  return (
    <div ref={refObject}>
      <BoxWrapper>
          <BoxHeader title={"About"} />
      </BoxWrapper>
    </div>
  );
}

export default About;
