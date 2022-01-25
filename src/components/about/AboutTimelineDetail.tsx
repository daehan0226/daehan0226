import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

type AboutTimelineDetailProps = {
    title: string,
    detail: {
        project: string,
        tasks: string[]
    }[]
}

export default function AboutTimelineDetail({title, detail}:AboutTimelineDetailProps) {
  return (
      <StyledEngineProvider injectFirst>
        <Accordion sx={{backgroundColor:"primary.100", boxShadow: "none"}} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{flex:0,  justifyContent: "flex-start", padding: 0, "& .Mui-expanded":{marginBottom: "0 !important"}}}
            >
            <Typography variant='h6' sx={{wordBreak: "break-word"}}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {detail && detail.map(({project, tasks})=>(
                    <>
                        <Typography variant='body1' >{project}</Typography>
                        {tasks.map((task)=>(
                            <Typography variant='body2' sx={{paddingLeft:1}}>{task}</Typography>
                        ))}
                    </>
                ))}
            </AccordionDetails>
        </Accordion>
      </StyledEngineProvider>
  );
}