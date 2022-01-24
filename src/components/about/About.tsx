import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common"
import AboutTimeline from "./AboutTimeline"

const About = ({refObject}:RefProps ) => {
  return (
    <div ref={refObject}>
      <BoxWrapper>
          <BoxHeader title={"About"} />
          <AboutTimeline />
      </BoxWrapper>
    </div>
  );
}

export default About;
