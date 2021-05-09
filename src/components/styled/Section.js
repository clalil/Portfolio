import React from "react";
import styled from "styled-components";
import {device} from "./Constants";

const Wrapper = styled.section`
  padding: 40px 0;
  width: 100%;
  text-align: center;
  display: block;
  height: 530px;
  background-color: #6d6875;

  @media screen and ${device.isDesktop} {
    padding: 60px 0;
  }
`

export const Section = ({children}) => {
  return <Wrapper>{children}</Wrapper>
};