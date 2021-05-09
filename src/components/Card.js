import React from "react";

export const Card = ({ project }) => {
  return (
    <>
<h1>name={project.repo}</h1>
<h2>description={project.description}</h2> 
<h3>language={project.language}</h3> 
<h4>link={project.link}</h4>
    </>
  )
}