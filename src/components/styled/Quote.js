import React from 'react';
import styled from 'styled-components';
import {device} from "./Constants";

const StyledQuote = styled.div `
  margin: 1rem 3rem;
  color: var(--light-border-color);

  @media ${device.isDesktop} {
    margin: 2rem;
  }
    &:hover {
      cursor: pointer;
      color: var(--white);
      text-shadow: 1px 0 0 rgb(160,160,160);
    }
`

export const Quote = ({children}) => {
  return <StyledQuote>{children}</StyledQuote>
};