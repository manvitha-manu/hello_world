import React from 'react';

//function Greet()
//{
//retrun <h1> Hello Manvitha </h1>
//}

const Greet = (props) => 
{
    console.log(props)
   return (
    <div>
   <h1> Bonjour!{props.name} from {props.series}</h1>
   {props.children}
   </div>
   )
}
export  default Greet