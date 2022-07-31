import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


export default function FeatureCard() {
  return (
    
    <Container style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "2em", marginBottom: "20vh" }}>
  <Card style={{ width: '20rem', marginRight: "2vw", borderRadius: "6px" }}>
      <Card.Body style={{ marginBottom: "4vh" }}>
        <Card.Title style={{ fontWeight: "bolder", marginTop: "7vh", marginLeft: "0.5em", color: "hsl(260, 8%, 14%)" }}>Brand Recognition</Card.Title>
        <Card.Text style={{ margin: "0.5em", color: "#808080"  }}>Boost your brand recognition with each click. Generic links don’t 
mean a thing. Branded links help instil confidence in your content.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '20rem', marginRight: "2vw", marginTop: "4em", borderRadius: "6px" }}>
      <Card.Body style={{ marginBottom: "4vh" }}>
        <Card.Title style={{ fontWeight: "bolder", marginTop: "7vh", marginLeft: "0.5em", color: "hsl(260, 8%, 14%)" }}>Detailed Records</Card.Title>
        <Card.Text style={{ margin: "0.5em", color: "#808080" }}>Gain insights into who is clicking your links. Knowing when and where 
people engage with your content helps inform better decisions.
        </Card.Text>
     
      </Card.Body>
    </Card> 
    <Card style={{ width: '20rem', marginRight: "2vw", marginTop: "8em", borderRadius: "6px" }}>
      <Card.Body  style={{ marginBottom: "4vh" }}>
        <Card.Title style={{ fontWeight: "bolder", marginTop: "7vh", marginLeft: "0.5em", color: "hsl(260, 8%, 14%)" }}>Fully Customizable</Card.Title>
        <Card.Text style={{ margin: "0.5em", color: "#808080"  }}>Improve brand awareness and content discoverability through customizable 
links, supercharging audience engagement.
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Container>
  )
}
