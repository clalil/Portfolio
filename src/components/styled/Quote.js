import React from 'react';
import styled from 'styled-components';
import {device} from "./Constants";

const StyledQuote = styled.div `
  color: var(--white);
  margin: 1rem 3rem;
  text-shadow: 1px 0 0 rgb(160,160,160);

  @media ${device.isDesktop} {
    margin: 2rem;
  }
`

export const Quote = ({className, children}) => {
  return <StyledQuote className={className}>{children}</StyledQuote>
};