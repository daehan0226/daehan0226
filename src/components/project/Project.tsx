import React, { useState } from 'react';

import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common";

import projects from "./projects"


const Project = ({refObject}:RefProps ) => {
  const [openAllDetails, setOpenAllDetails] = useState<boolean>(false);

  return (
    <div ref={refObject}>
      <BoxWrapper >
        <BoxHeader title={"Project"} />
          <>
            {projects.map(project => (
              <div key={project.name}>
                <p>
                  {project.name}
                </p>
              </div>
            ))}
          </>
      </BoxWrapper>
    </div>
  );
}
export default Project