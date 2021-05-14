import React, { useState, useEffect} from "react";
import styled from "styled-components";
import {Card} from "./Card";
import {Section} from "./styled/Section";
import {Header} from "./styled/Header";
import {device} from "./styled/Constants";

const ProjectsSection = styled(Section)`
  background: var(--second-shade);
  height: auto;
`

const Gallery = styled.div `
display: grid;
grid-template-columns: repeat(auto-fit, 200px);
grid-column-gap: 40px;
min-height: 700px;
overflow: hidden;
overflow: -moz-scrollbars-horizontal;
justify-content: center;

@media screen and (min-width: ${device.isDesktop}) {
  min-height: 600px;
}
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