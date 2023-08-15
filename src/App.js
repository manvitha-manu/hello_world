import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from'./components/message';
import Counter from './components/Counter';
import FunctionClick from './components/FuncClick';
import classClick from './components/classClick';
import eventbind from './components/eventbind';

class App extends Component{
  render(){
    return(
      <div className="App">
        <eventbind/>
        {/* <FunctionClick/>
        <classClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
         {/* < Greet name= "Nairobi" series="MH">
          {/* <h1>Example for children</h1> */}
          {/* </Greet> */}
         {/* < Greet name= "Arya Stark" series="GOT">
          <button>Click Me!</button>n
          </Greet>
         < Greet name= "Khaleesi" series="GOT"/>
          
         < Welcome name= "Arya Stark" series="GOT">
          <button>Click Me!</button>
          </Welcome>
         < Welcome name= "Khaleesi" series="GOT"/> 
        <Hello/> */}
        {/* < Welcome name= "Nairobi" series="MH">
          <h1>Example for children</h1>
         </Welcome> */}
      </div>
    ); 
  }
}

export default App;
