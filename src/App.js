import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from'./components/message';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Message/>
         {/* < Greet name= "Nairobi" series="MH">
          <h1>Example for children</h1>
          </Greet>
         < Greet name= "Arya Stark" series="GOT">
          <button>Click Me!</button>
          </Greet>
         < Greet name= "Khaleesi" series="GOT"/>
         < Welcome name= "Nairobi" series="MH">
          <h1>Example for children</h1>
          </Welcome>
         < Welcome name= "Arya Stark" series="GOT">
          <button>Click Me!</button>
          </Welcome>
         < Welcome name= "Khaleesi" series="GOT"/> 
        <Hello/> */}
      </div>
    ); 
  }
}

export default App;
