import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navbar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/esm/Container';
import MainContainer from './components/Container';
import LinkContainer from './components/LinkContainer';
import { Heading, Para } from './components/TypographyStyles';
import FeatureCard from './components/FeatureCard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainContainer />
      <LinkContainer />
      <Container fluid style={{ backgroundColor: "#eef1f6",
     paddingBottom: "335px",
     height: "140vh" 
				 }}>
          <Container style={{ display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     paddingTop: "20vh",
     maxWidth: "40vw"
				 }}>

          
<Heading>Advanced Statistics</Heading>
<Para>Track how your links are performing across the web with our 
  advanced statistics dashboard.</Para>
  
  
  
  </Container>
         <FeatureCard />

         </Container>
      
         
      <Footer />
    </div>
  );
}

export default App;
