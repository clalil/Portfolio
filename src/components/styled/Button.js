import React from 'react';
import styled from 'styled-components';

const PrimaryBtn = styled.button`
display: inline-block;
font-family: 'Nunito Sans', sans-serif;
font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
border-radius: 10px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: var(--second-shade);
color: var(--white);
border: 2px solid white;
`

export const Button = ({children}) => {
  return <PrimaryBtn>{children}</PrimaryBtn>
};