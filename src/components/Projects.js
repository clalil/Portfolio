import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Card} from "./Card";
import {device} from "./styled/Constants";
import {Header} from "./styled/Header";
import {Section} from "./styled/Section";

const Footer = styled.div `
  color: var(--white);
  margin: 2rem 0 0;
  padding: 1rem 0 0;
  text-align: center;
  font-style: bold;
  border-top: 1px solid var(--white);
`

const Gallery = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  min-height: 500px;
  overflow: -moz-scrollbars-horizontal;
  justify-content: center;

  @media screen and ${device.isTablet} {
    grid-template-columns: repeat(auto-fit, 300px);
  }
`

const H2 = styled(Header) `
  font-size: 1.8rem;
`

const ProjectsSection = styled(Section)`
  height: auto;
  background: linear-gradient(var(--fourth-shade), var(--third-shade), var(--fourth-shade));
  ${({ inView }) => inView && `
    background: linear-gradient(var(--fourth-shade), var(--second-shade), var(--third-shade));
  `}
`

export const Projects = ({ inView }) => {
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
    <div id="projects">
      <ProjectsSection inView={inView}>
        <Header>Pinned projects</Header>
        <H2>My favourite GitHub projects</H2>
        {
        !pinnedProjects.length ? 
          <H2>Loading...</H2>
          :
          (
            <Gallery>
              {pinnedList}
            </Gallery>
          )
        }
        <Footer>
          © 2021 Made with React (v. {React.version})
        </Footer>
      </ProjectsSection>
    </div>
  )
};