import React from "react";
import styled from "styled-components";
import {Header} from "./styled/Header";
import {Quote} from "./styled/Quote";

const H2 = styled(Header) `
  font-size: 1.8rem;
`

export const AboutContent = ({ content }) => {
  return(
    <>
      <H2>{content.title}</H2>
      <Quote>{content.details}</Quote>
    </>
  )
}
