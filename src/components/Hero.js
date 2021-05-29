import React from "react";
import styled from "styled-components";
import {Header} from "./styled/Header";
import {device} from "./styled/Constants";
import {Section} from "./styled/Section";
import {Quote} from "./styled/Quote";
import {HashLink} from 'react-router-hash-link'

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
  height: 60px;

  @media screen and ${device.isLaptop} {
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
  min-height: 500px;
  background: linear-gradient(var(--medium-border-color), var(--medium-border-color), var(--second-shade));
  ${({ inView }) => inView && `
    background: linear-gradient(var(--first-shade), var(--second-shade));
  `}
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

const Link = styled.a `
  text-decoration: none;
  color: inherit;
`

const LinkedIn = "https://www.linkedin.com/in/living-and-breathing-tdd/"

export const Hero = ({ inView }) => {
  return(
    <>
    <HeroSection inView={inView}>
      <H1>Hi, I'm Clarissa.</H1>
        <H3>I love coding in teams.</H3>
        <HeroQuote>
          'Clarissa is a hard worker, commited and ambitious. She is a quick study and not afraid to ask questions. A great addition to any team.'
          ~ S. Steindorsson
        </HeroQuote>
        <Divider />
        <Button>
          <HashLink smooth to="#projects" style={{textDecoration: "none", color:"inherit"}}>
            Projects
          </HashLink>
        </Button>
        <Button>
          <Link href={LinkedIn}>Contact</Link>
        </Button>
    </HeroSection>
    </>
  )
}