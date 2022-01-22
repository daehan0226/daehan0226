import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper} from "../common"

const About = ({refObject}:RefProps ) => {
  return (
    <BoxWrapper>
        <h1 ref={refObject}>About</h1>
    </BoxWrapper>
  );
}

export default About;
