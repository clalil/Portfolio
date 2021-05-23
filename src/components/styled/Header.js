import React from "react";
import styled from "styled-components";

const H1 = styled.h1 `
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin: 40px;
  color: var(--light-border-color);
`

export const Header = ({ children, className }) => {
  return <H1 className={className}>{children}</H1>
};