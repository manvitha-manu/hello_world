import React, { Component } from 'react';

class eventbind extends Component {
    constructor(props){
        super(props)

        this.state={message:"Hello"}
    
    // this.clickHandler=this.clickHandler.bind(this)
}
       
    // clickHandler()
    // {
    //     this.setState({
    //         message:'Thank you for clicking'
    //     })
    // }
    clickHandler=()=>
    {
        this.setState({
            message:'Thank you for clicking'
        })
    }
    render() {
        return (
            <div>
                <div>
                {this.state.message}
                </div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>   */}
                {/* <button onClick={()=>this.clickHandler()}>Click here!
                </button> */}
                <button onClick={this.clickHandler}>Click here!</button>
            </div>
        );
    } 
}


export default eventbind;