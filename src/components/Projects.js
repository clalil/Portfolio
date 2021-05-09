import React, { useState, useEffect} from "react";
import {Card} from "./Card";

export const Projects = () => {
  const [pinnedProjects, SetPinnedProjects] = useState([])

  useEffect(() => {
    fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=clalil')
      .then(response => response.json())
      .then(projects => { SetPinnedProjects(projects) })
  }, [])

  return !pinnedProjects.length ? 
  <h1>Loading...</h1>
  :
  (
    pinnedProjects.map(project => {
      return <Card project={project} key={project.repo} />
    })
  )
};