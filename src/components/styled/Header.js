import React from "react";
import styled from "styled-components";
import {device} from "./Constants";

const H1 = styled.h1 `
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin: 40px;
  color: var(--light-border-color);

  @media screen and ${device.isTablet} {
    margin: 50px 0 60px;
  }
`

export const Header = ({ children, className }) => {
  return <H1 className={className}>{children}</H1>
};
