import React, { useState, useEffect} from "react";
import styled from "styled-components";
import {Card} from "./Card";
import {Section} from "./styled/Section";
import {Header} from "./styled/Header";

const ProjectsSection = styled(Section)`
  background: var(--second-shade);
  height: auto;
  z-index: 1;
  position: relative;
`

const Gallery = styled.div `
display: grid;
grid-template-columns: repeat(auto-fit, 200px);
grid-column-gap: 40px;
grid-row-gap: 40px;
max-width: 100%;
max-height: 100%;
overflow: hidden;
justify-content: center;
`

export const Projects = () => {
  const [pinnedProjects, SetPinnedProjects] = useState([])

  useEffect(() => {
    fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=clalil')
      .then(response => response.json())
      .then(projects => { SetPinnedProjects(projects) })
  }, [])

  let pinnedList = pinnedProjects.map(project => {
    return <Card project={project} key={project.repo} />
  })

  return (
    <ProjectsSection>
      <Header>Pinned projects</Header>
      {
      !pinnedProjects.length ? 
        <h1>Loading...</h1>
        :
        (
          <Gallery>
            {pinnedList}
          </Gallery>
        )
      }
    </ProjectsSection>
  )
};