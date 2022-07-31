import styled from "styled-components";
import HeroImage from './../assets/images/illustration-working.svg';

export const MainContainer = styled.div`
    margin-right: 0;
	max-width: 1000px;
	margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
`

export const BoxContainer = styled.div`
display: flex;
flex-direction: column;

margin:0 auto;
height: 100vh;
align-content: flex-start;
flex-wrap: nowrap;
justify-content: center;
align-items: flex-start;
`

export const Heading = styled.h1`
font-size: 48px;
font-family: 'Poppins', sans-serif;
color: #000000;
margin-bottom: 20px;
font-weight: 700;
`;

export const Intro = styled.p`
font-size: 16px;
font-family: 'Poppins', sans-serif;
color:  #808080;
margin-bottom: 20px;
font-weight: bold;
`;

export const HeaderImage = styled.img.attrs({
    src: `${HeroImage}`
  })`
  width: 660px;
  height: 400px;
  `;