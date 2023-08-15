import React from 'react';

//function Greet()
//{
//retrun <h1> Hello Manvitha </h1>
//}

// const Greet = (props) => 
// {
//     console.log(props)
//    return (
//     <div>
//    <h1> Bonjour!{props.name} from {props.series}</h1>
//    {props.children}
//    </div>
//    )
// }


// destructing props

// const Greet =({name, series}) =>
// {
//     return(
//     <div>
//         <h1>
//             Hello {name} from{series}
//         </h1>
//     </div>
//     )
// }
// destructing props

const Greet= props=>
 {
    const{name,series} =props
    return(
        <div>
         <h1>Hello {name} from{series}</h1>  
        </div>
    )
 }
export  default Greet