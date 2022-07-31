import React from 'react'; 
import { MainContainer, Heading, Intro, BoxContainer, HeaderImage, Button } from './ContainerStyles';


export default function Container() {
  return (
    <MainContainer>
        <BoxContainer> 
        <Heading> More than just shorter links</Heading>
        <Intro>  Build your brand’s recognition and get detailed insights 
        on how your links are performing.</Intro>
        <Button>Get Started</Button>
        </BoxContainer>
          <HeaderImage />
          </MainContainer>
  )
}
