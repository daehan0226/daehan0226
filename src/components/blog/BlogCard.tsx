import React, {FC, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import {IBlog} from "../../models"

export interface BlogCardProps {
  post: IBlog
}

const BlogCard: FC<BlogCardProps> = ({post}) => {
  return (
    <Card sx={{ width: 320 }} >
      {post.image && (
        <CardMedia
          component={post.image.component}
          height={post.image.height}
          image={post.image.url}
          alt={post.image.alt}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary.900">
          {post.title}
        </Typography>
        <Typography variant="body2" color="primary.900">
          {post.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{marginTop:'auto'}} >
        <Link href={post.link} sx={{"&:hover": {color:"secondary.900"}}}>
          <Button size="small" sx={{color:"secondary.500"}} >Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default BlogCard;