import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common"


const Home = ({refObject}:RefProps ) => {
  return (
    <div ref={refObject}>
      <BoxWrapper>
          <BoxHeader title={"Home"} />
      </BoxWrapper>
    </div>
  );
}

export default Home;
