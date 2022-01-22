import React, {useRef} from 'react';

import {BoxWrapper} from "../common"

function About() {
  const aboutnRef = React.useRef<any>();

  return (
    <BoxWrapper>
      <>
        <h1 id="about-anchor" >About</h1>
      </>
    </BoxWrapper>
  );
}

export default About;
