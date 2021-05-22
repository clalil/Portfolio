import React from "react";
import styled from "styled-components";
import {Section} from "./styled/Section";
import {Header} from "./styled/Header";
import {Quote} from "./styled/Quote";
import {Card} from "./Card";

const AboutSection = styled(Section)`
  background: linear-gradient(var(--second-shade), var(--third-shade), var(--fourth-shade));
  ${({ inView }) => inView && `
    background: linear-gradient(var(--second-shade), var(--fourth-shade));
  `}
`

const H2 = styled(Header) `
  font-size: 1.8em;
`

const Container = styled.div `
  display: flex;
  justify-content: center;
`

export const About = ({inView}) => {
  return(
    <>
    <AboutSection inView={inView}>
      <Header>Let's talk</Header>
      <Container>
        <Card project={{repo: "ben-white-unsplash", description: "", link: ""}}/>
      </Container>
      <H2>Code</H2>
      <Quote>
        Hi!
      </Quote>
    </AboutSection>
    </>
  )
}