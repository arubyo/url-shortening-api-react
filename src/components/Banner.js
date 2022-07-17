import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Heading, Box } from './BannerStyles';
import { Row } from './FooterStyles';
import { ColContainer } from './BannerStyles';

export default function Banner() {
  return (
    <>
    <Container fluid style={{ backgroundColor: "hsl(257, 27%, 26%)",
                paddingTop: "40px",
                paddingBottom: "40px",
                
				 }}>
       
         <ColContainer>
        
        <Heading>Boost Your Links Today</Heading>
        <Button>Get Started</Button>
        </ColContainer>
        
    </Container>
    </>
  
  )
}
