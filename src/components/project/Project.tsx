import React, { useState, useEffect } from 'react';

import {RefProps, IProject} from "../../models"
import {BoxWrapper, BoxHeader} from "../common";

import {db} from "../../api/firebaseApi"
import { getDocs, collection} from "firebase/firestore";

const Project = ({refObject}:RefProps ) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    let temp:  any = []
    querySnapshot.forEach(doc=>{
      temp.push(doc.data())
    })
    setProjects([...temp])
  }

  useEffect(() => {
    fetchData()
  },[])

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