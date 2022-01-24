import React from 'react';

import Typography from '@mui/material/Typography';

import {RefProps, IProject} from "../../models"
import {BoxWrapper, BoxHeader, ErrorAlert, LoadingBox} from "../common";

import useGetDocs from '../../hooks/useGetDocs';

const Project = ({refObject}:RefProps ) => {
  const {data, loading, error} = useGetDocs<IProject>({collectionName:"projects"});

  return (
    <div ref={refObject}>
      <BoxWrapper backgroundColor='primary.800' >
          <BoxHeader title={"Project"} color={'primary.contrastText'} divierColor={'primary.contrastText'} />
          <>
            {loading && (<LoadingBox />)}
            {error && (<ErrorAlert msg={error} />)}
            {data && data.map(project => (
              <div key={project.name}>
                <Typography variant="body1" color="primary.contrastText" sx={{ marginTop: 2}} >
                  {project.name}
                </Typography>
                <p>
                </p>
              </div>
            ))}
          </>
      </BoxWrapper>
    </div>
  );
}
export default Project