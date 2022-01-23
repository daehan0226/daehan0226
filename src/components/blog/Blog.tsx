import { Box } from '@mui/system';
import React, {useEffect, useState} from 'react';

import {RefProps, IBlog} from "../../models"
import {BoxWrapper, BoxHeader} from "../common"
import BlogCard from './BlogCard';

import {db} from "../../api/firebaseApi"
import { getDocs, collection} from "firebase/firestore";


const Blog = ({refObject}:RefProps) => {
  const [posts, setPosts] = useState<IBlog[]>([]);
  
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "blog_posts"));
    let temp:  any = []
    querySnapshot.forEach(doc=>{
      temp.push(doc.data())
    })
    setPosts([...temp])
  }

  useEffect(() => {
    fetchData()
  },[])
  return (
    <div ref={refObject}>
      <BoxWrapper>
          <>
            <BoxHeader title={"Blog"} />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gridGap: 10,
                margin: '50px auto',
                "> *" : {
                  margin: "auto"
                }
              }}
              >
              {posts.map((post, i)=> (
                <BlogCard key={i} post={post} />
              ))}
            </Box>
          </>
      </BoxWrapper>
    </div>
  );
}

export default Blog;
