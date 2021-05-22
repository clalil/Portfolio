import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  display: inline-block;
  text-transform: uppercase;
  font-family: 'Nunito Sans', sans-serif;
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: var(--white);
  background-color: var(--black);
  border: 2px solid var(--third-shade);

  &:hover {
    background-color: var(--third-shade);
    border: 2px solid var(--black);
    cursor: pointer;
  }
`

export const Button = ({children}) => {
  return <StyledBtn>{children}</StyledBtn>
};