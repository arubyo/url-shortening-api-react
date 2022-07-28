import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navbar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/esm/Container';
import MainContainer from './components/Container';
import LinkContainer from './components/LinkContainer';
function App() {
  return (
    <div className="App">
      <Navigation />
      <MainContainer />
      <LinkContainer />
      <Container fluid style={{ backgroundColor: "hsl(0, 0%, 75%)",
     paddingBottom: "335px",
     height: "100vh" 
				 }}>

         </Container>
      

      <Footer />
    </div>
  );
}

export default App;
