import React from "react";
import styled from "styled-components";
import {Button} from "./styled/Button";
import {Section} from "./styled/Section";
import {Header} from "./styled/Header";

const HeroSection = styled(Section)`
  background: var(--first-shade);
`

const H3 = styled.h3 `
  line-height: 0.;
  letter-spacing: -0.5px;
  font-size: 1.8em;
  color: var(--light-border-color);
`

const Quote = styled.div `
  font-style: italic;
  margin: 2rem;
  color: var(--light-border-color);
    &:hover {
      cursor: pointer;
      color: var(--white);
      text-shadow: 1px 0 0 rgb(160,160,160);
    }
`

export const Hero = () => {
  return(
    <>
    <HeroSection>
      <Header>Hi, I'm Clarissa.</Header>
        <H3>I love coding in teams.</H3>
        <Quote>
          <p>'Clarissa is a hard worker, commited and ambitious. She is a quick study and not afraid to ask questions. A great addition to any team.'</p>
          <p>~ S. Steindorsson</p>
        </Quote>
        <Button>Projects</Button>
        <Button>Contact</Button>
    </HeroSection>
    </>
  )
}