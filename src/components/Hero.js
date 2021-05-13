import React from "react";
import styled from "styled-components";
import {Button} from "./styled/Button";
import {Section} from "./styled/Section";
import {Header} from "./styled/Header";

const HeroSection = styled(Section)`
  background: var(--first-shade);
`

const H3 = styled.h3 `
  line-height: 0.8;
  letter-spacing: -0.5px;
  font-size: 1.8em;
  color: var(--light-border-color);
`

const Divider = styled.div `
  display: block;
  padding: 15px 0;
`

export const Hero = () => {
  return(
    <>
    <HeroSection>
      <Header>Hi, I'm Clarissa.</Header>
      <H3>I love coding in teams.</H3>
      <Divider />
      <Button>Projects</Button>
      <Button>Contact</Button>
    </HeroSection>
    </>
  )
}