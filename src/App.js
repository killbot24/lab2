import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header} from './componets/header'
import { Footer} from './componets/footer'
import { Content} from './componets/content'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container}from 'react-bootstrap';
class App extends Component {
  render (){
    return(
    <div className="App">

<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

      <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
  );
}
}

export default App;
