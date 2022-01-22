import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper} from "../common";

const Project = ({refObject}:RefProps ) => {
  return (
    <BoxWrapper backgroundColor='secondary.dark' backgroundHoverColor='secondary.main' >
        <>
          <h1 ref={refObject}>Project</h1>
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
        </>
    </BoxWrapper>
  );
}
export default Project