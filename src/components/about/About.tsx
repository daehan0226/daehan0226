import React, {useRef} from 'react';

import {BoxWrapper} from "../common"

function About() {
  const aboutnRef = React.useRef<any>();

  return (
    <BoxWrapper>
      <>
        <h1 ref={aboutnRef} >About</h1>
      </>
    </BoxWrapper>
  );
}

export default About;
