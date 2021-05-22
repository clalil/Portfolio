import React from "react";
import styled from "styled-components";
import {Button} from "./styled/Button";
import {Section} from "./styled/Section";
import {Header} from "./styled/Header";
import {Quote} from "./styled/Quote";
import {device} from "./styled/Constants"

const HeroSection = styled(Section)`
  background: linear-gradient(var(--first-shade), var(--second-shade));
`

const HeroQuote = styled(Quote)`
  font-style: italic;
`

const H3 = styled.h3 `
  line-height: 0.;
  letter-spacing: -0.5px;
  font-size: 1.8em;
  color: var(--light-border-color);
`

const Divider = styled.div `
  display: block;
  height: 40px;

  @media screen and ${device.isDesktop} {
    height: 100px;
  }
`

export const Hero = () => {
  return(
    <>
    <HeroSection>
      <Header>Hi, I'm Clarissa.</Header>
        <H3>I love coding in teams.</H3>
        <HeroQuote>
          <p>'Clarissa is a hard worker, commited and ambitious. She is a quick study and not afraid to ask questions. A great addition to any team.'</p>
          <p>~ S. Steindorsson</p>
        </HeroQuote>
        <Divider />
        <Button>Projects</Button>
        <Button>Contact</Button>
    </HeroSection>
    </>
  )
}