import React from "react";
import styled from "styled-components";
import {Button} from "./styled/Button";
import {Section} from "./styled/Section";

const H1 = styled.h1 `
  line-height: 1.2;
  letter-spacing: -0.5px;
  font-size: 3.5em;
  color: var(--white);
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
    <Section>
    <H1>Hi, I'm Clarissa.</H1>
    <H3>I love coding in teams.</H3>
    <Divider></Divider>
    <Button>Projects</Button>
    <Button>Contact</Button>
    </Section>
    </>
  )
}