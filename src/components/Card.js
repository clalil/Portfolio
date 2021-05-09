import React from "react";
import styled from "styled-components";

const Item = styled.div `
  flex: 1 0 24rem;
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
  border-radius: 10rem;
`

const Image = styled.div `
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;  
`

export const Card = ({ project }) => {
  return (
    <>
    <Item>
      <Image>
          <h1>name={project.repo}</h1>
          <h2>description={project.description}</h2> 
          <h3>language={project.language}</h3> 
          <h4>link={project.link}</h4>
      </Image>
    </Item>
    </>
  )
}