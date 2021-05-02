import React from 'react';
import styled from 'styled-components';

const PrimaryBtn = styled.button`
display: inline-block;
font-family: 'Nunito Sans', sans-serif;
border-radius: 10px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: linear-gradient(
  20deg
  , rgb(33, 33, 33), rgb(66, 66, 66));
color: var(--main-color);
border: 2px solid white;
`

export const Button = ({children}) => {
  return <PrimaryBtn>{children}</PrimaryBtn>;
};