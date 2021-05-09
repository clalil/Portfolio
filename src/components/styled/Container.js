import React from "react";
import styled from "styled-components";
import {device} from "./Constants";

const Box = styled.section`
  padding: 16px;
  text-align: center;

  @media screen and ${device.isDesktop} {
    padding: 60px 0;
  }
`

export const Container = ({children}) => {
  return <Box>{children}</Box>
};