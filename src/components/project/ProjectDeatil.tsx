import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';

import {IProject} from "../../models"

type FeatureBoxProps = {
  title: string;
  features?: string[]
}

const FeatureBox = ({title, features}:FeatureBoxProps) => {
  return (
    <Box>
      <Typography variant="body1" color="primary.contrastText" sx={{ marginTop: 2}} >
        {title}
      </Typography>
      {features && features.map(feature=>(
        <Typography variant="body2" color="primary.contrastText" sx={{ marginLeft: 2, textAlign: 'left'}}  >{feature}</Typography>
      ))
      }
    </Box>
  )
}

type ProjectDetailPropS = {
  project:IProject
}

const ProjectDetail = ({project}:ProjectDetailPropS) => {

  return (
    <Box>
      <Link href={project.link}>
        <Typography variant="h6" color="secondary.700" sx={{ margin: 2}} >
          {project.name}
        </Typography>
      </Link>
      <Box sx={{ display: 'flex', flexWrap:'wrap', alignItems: 'center', justifyContent:'center'}} >
        {project.image && (
            <Box sx={{width: {mobile: 200, tablet: 300}}}>
              <Link href={project.link}>
                <img 
                  style={{width: "100%", height: "auto"}} 
                  src={`${process.env.PUBLIC_URL}/images/${project.image}`} 
                  alt={project.name}
                  />
              </Link>
            </Box>
        )}
        <Box sx={{padding: {mobile:1, tablet: 2}}}>
          {project.front && (
            <FeatureBox title={"Front"} features={project.front.features} />
          )}
          {project.back && (
            <FeatureBox title={"Back"} features={project.back.features} />
          )}
          {project.crawler && (
            <FeatureBox title={"Crawler"} features={project.crawler.features} />
          )}
        </Box>
      </Box>
    </Box>
                
  );
}
export default ProjectDetail;