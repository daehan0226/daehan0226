import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common";

const Project = ({refObject}:RefProps ) => {
  return (
    <div ref={refObject}>
      <BoxWrapper >
        
        <BoxHeader title={"Project"} />
          <ul>
            <li>
              <div>Pet Albums</div>
              <div>ReactJS(Typescript) Python Flask Mysql</div>
              <div>image slides</div>
              <div>details</div>
            </li>
            <li></li>
            <li></li>
          </ul>
      </BoxWrapper>
    </div>
  );
}
export default Project