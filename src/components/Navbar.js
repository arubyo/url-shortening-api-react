import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, ButtonContainer } from './NavbarStyles';

function Navigation() {
  return (
    <>
      <Navbar bg="none" variant="light">
        <Container>
          <Navbar.Brand href="#home">
          <h3 style={{ color: "black",
				textAlign: "left",
                fontSize: "26px",
                fontWeight: "bolder"
				 }}>
            Shortly
            </h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#features">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Resources</Nav.Link>
           
       
          </Nav>
          <ButtonContainer>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Button>Sign Up</Button>

            </ButtonContainer>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;