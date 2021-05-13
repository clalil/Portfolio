import React from "react";
import styled from "styled-components";

const H1 = styled.h1 `
  line-height: 1.2;
  letter-spacing: -0.5px;
  font-size: 3.5em;
  color: var(--white);
`

export const Header = ({children}) => {
  return <H1>{children}</H1>
};