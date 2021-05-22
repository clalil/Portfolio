import React from "react";
import styled from "styled-components";
import {device} from "./Constants";

const Wrapper = styled.section`
  padding: 40px 0;
  width: 100%;
  text-align: center;
  display: block;
  min-height: 100vh;

  @media ${device.isDesktop} {
    padding: 60px 0;
    min-height: 530px;
  }
`

export const Section = ({className, children}) => {
  return <Wrapper className={className}>{children}</Wrapper>
};