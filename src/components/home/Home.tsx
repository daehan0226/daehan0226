import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper} from "../common"


const Home = ({refObject}:RefProps ) => {
  return (
    <BoxWrapper>
        <h1 ref={refObject}>Home</h1>
    </BoxWrapper>
  );
}

export default Home;
