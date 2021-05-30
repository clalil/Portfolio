import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {AboutContent} from "./AboutContent";
import {Card} from "./Card";
import {Header} from "./styled/Header";
import {Section} from "./styled/Section";
import axios from "axios";

const AboutSection = styled(Section)`
  background: linear-gradient(var(--second-shade), var(--third-shade), var(--fourth-shade));
  ${({ inView }) => inView && `
    background: linear-gradient(var(--second-shade), var(--fourth-shade));
  `}
`

const Container = styled.div `
  display: flex;
  justify-content: center;
`

export const About = ({ inView }) => {
  const [content, setContent] = useState([])
  let contents;

  useEffect(() => {
    axios.get("data/about.json").then(response => {
      setContent(response.data)
    })
  }, [])

  if (content) {
    contents = content.map(content => {
      return (
        <AboutContent content={content} key={content.title} />
      )
    })
  }

  return (
    <>
    <AboutSection inView={inView}>
      <Header>Let's talk</Header>
      <Container>
        <Card project={{repo: "ben-white-unsplash", description: "", link: ""}}/>
      </Container>
      {contents}
    </AboutSection>
    </>
  )
}