import React, {useState, useEffect} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { ITimeLineItem } from '../../models';

import {ErrorAlert, LoadingBox} from "../common"
import useGetDocs from '../../hooks/useGetDocs';

export default function AboutTimeline() {  
  const {data, loading, error} = useGetDocs<ITimeLineItem>("timeline");

  return (
    <Timeline>
      {loading && (<LoadingBox />)}
      {error && (<ErrorAlert msg={error} />)}
      {data && data.map(item=>(
        <TimelineItem key={item.title}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{backgroundColor: item.dotColor}} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, display:'flex', flexDirection:'column', alignItems: 'left', justifyContent:'center' }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            {item.subTitle && (
              <Typography variant="body2">
                {item.subTitle} 
              </Typography>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}