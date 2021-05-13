import React from "react";
import styled from "styled-components";

const Image = styled.div `
background-image: url("https://100dayscss.com/codepen/40-3.jpg");
background-repeat: no-repeat;
background-size: cover;
color: white;
height: 200px;
width: 200px;
align-self: center;
background-color: white;
border-radius: 100%;
opacity: 0.5;
transition: all 1.2s ease;
box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.2);
z-index: 100;
position: relative;

&:hover {
  cursor: pointer;
	-webkit-transform: scale(1.1);
	-ms-transform: scale(1.1);
	transform: scale(1.1);
	opacity: 1;
  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.2);
}
`

export const Card = ({ project }) => {
  return (
    <>
      <Image>
          <p>name={project.repo}</p>
          <p>description={project.description}</p> 
          <p>language={project.language}</p> 
          <p>link={project.link}</p>
      </Image>
    </>
  )
}