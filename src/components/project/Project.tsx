import React from 'react';

import {RefProps, IProject} from "../../models"
import {BoxWrapper, BoxHeader} from "../common";

import {ErrorAlert, LoadingBox} from "../common"
import useGetDocs from '../../hooks/useGetDocs';

const Project = ({refObject}:RefProps ) => {
  const {data, loading, error} = useGetDocs<IProject>({collectionName:"projects"});

  return (
    <div ref={refObject}>
      <BoxWrapper >
          <BoxHeader title={"Project"} />
          <>
            {loading && (<LoadingBox />)}
            {error && (<ErrorAlert msg={error} />)}
            {data && data.map(project => (
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