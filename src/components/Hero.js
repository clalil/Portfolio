import React from "react";
import styled from "styled-components";
import {Section} from "./styled/Section";
import {Header} from "./styled/Header";
import {Quote} from "./styled/Quote";
import {device} from "./styled/Constants"

const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  font-family: 'Nunito Sans', sans-serif;
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: var(--white);
  background-color: var(--black);
  border: 2px solid var(--third-shade);

  &:hover {
    background-color: var(--third-shade);
    border: 2px solid var(--black);
    cursor: pointer;
  }
`

const Divider = styled.div `
  display: block;
  height: 40px;

  @media screen and ${device.isDesktop} {
    height: 100px;
  }
`

const H1 = styled(Header) `
  font-size: 3.5rem;
`

const H3 = styled(Header) `
  font-size: 1.8rem;
`

const HeroSection = styled(Section)`
  background: linear-gradient(var(--first-shade), var(--second-shade));
`

const HeroQuote = styled(Quote) `
  color: var(--light-border-color);
  font-style: italic;
  text-shadow: none;

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
      <H1>Hi, I'm Clarissa.</H1>
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