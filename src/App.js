import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header} from './componets/header'
import { Footer} from './componets/footer'
class App extends Component {
  render (){
    return(
    <div className="App">
      <Header></Header>
        <h1>hello world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
        <Footer></Footer>
    </div>
  );
}
}

export default App;
