import React, { useState, useEffect} from "react";
import styled from "styled-components";
import {Card} from "./Card";
import {Section} from "./styled/Section";

const Gallery = styled.div `
  display: flex;
  flex-wrap: wrap;
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
    <Section>
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
    </Section>
  )
};