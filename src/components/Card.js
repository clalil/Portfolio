import React from "react";
import styled from "styled-components";

const Circle = styled.div `
position: relative;
display: block;
background: ${props => `url(${props.background}) top center / cover no-repeat`};
height: 200px;
width: 200px;
align-self: center;
color: var(--white);
background-color: var(--black);
border-radius: 100%;
opacity: 0.8;
transition: all 1.2s ease;
border: 5px solid var(--light-border-color);
box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.2);

&:hover {
  cursor: pointer;
	-webkit-transform: scale(1.1);
	-ms-transform: scale(1.1);
	transform: scale(1.1);
	opacity: 1;
  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.2);
}
`

const Content = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.50);
`

const Wrapper = styled.div `
display: table;
width: 100%;
height: 100%;
` 

const TextWrapper = styled.div `
display: table-cell;
padding: 1em;
vertical-align: middle;
`

const H2 = styled.h2 `
  font-weight: 700;
  line-height: 1em;
  font-size: 1.2rem !important;
`

const P = styled.p `
  font-weight: 300;
  font-size: 0.8rem !important;
  margin-bottom: 5px;
`

const Link = styled.a `
  display: flex;
`

const Image = styled.img `
  margin: auto;
  height: 30px;
  width: 30px;
  //Barrett Sonntag filter calculator used to calculate hue
  filter: invert(99%) sepia(1%) saturate(197%) hue-rotate(25deg) brightness(115%) contrast(92%);

  :hover {
    filter: invert(58%) sepia(8%) saturate(1179%) hue-rotate(298deg) brightness(96%) contrast(91%);
  }
`

export const Card = ({ project }) => {
  return (
    <>
      <Circle background={`/img/${project.repo}.jpg`}>
        <Content>
          <Wrapper>
            <TextWrapper>
              <H2>{project.description}</H2> 
              <P>#{project.language}</P> 
              <Link href={project.link} target="_blank">
                  <Image src="/img/gh.png" />
              </Link>
            </TextWrapper>
          </Wrapper>
        </Content>
      </Circle>
    </>
  )
}