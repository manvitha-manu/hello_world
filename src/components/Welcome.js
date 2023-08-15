import React, {Component} from 'react'

// class Welcome extends Component{
//   render()
// // {
// //     return (
// //       <div>
// //     <h1> This is Class Component. Welcome!! {this.props.name} from {this.props.series}</h1> 
// //     {this.props.children}
// //     </div>
// //     )
// // }
// }

class Welcome extends Component{
  render()
  {
    const{name,series}=this.props
    return(
      <h1> Welcome state {this.props.name} from {this.props.series}</h1>
    )
  }
}
export default Welcome; 
