import styled from "styled-components";
import HeroImage from './../assets/images/illustration-working.svg';
<style> @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');</style>


export const MainContainer = styled.div`
    margin-right: 0;
	max-width: 1000px;
	margin: 0 auto;
    margin-right: 0px;
    height: 60vh;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-left: 80px;

`

export const BoxContainer = styled.div`
display: flex;
flex-direction: column;
margin:0 auto;
min-width:400px;
width: 100%;
margin-left: 80px;
height: 100vh;
align-content: flex-start;
flex-wrap: nowrap;
justify-content: center;
align-items: flex-start;
`

export const Heading = styled.h1`
font-size: 48px;
font-family: 'Poppins', sans-serif;
color: hsl(260, 8%, 14%);
margin-bottom: 20px;
font-weight: 700;
`;

export const Intro = styled.p`
font-size: 16px;
font-family: 'Poppins', sans-serif;
color:  hsl(0, 0%, 75%);
margin-bottom: 20px;
font-weight: bold;
`;

export const HeaderImage = styled.img.attrs({
    src: `${HeroImage}`
  })`
  width: 660px;
  height: 400px;
  position: relative;
  `;


  export const Button = styled.button`
border-radius: 22px;
color: #FFF;
font-weight: bold;
background-color:  hsl(180, 66%, 49%); 
border: none;
padding: 10px 30px;
`;