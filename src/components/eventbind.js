import React, { Component } from 'react';

class eventbind extends Component {
    constructor(props){
        super(props)

        this.state={message:"Hello"}
    }
    // clickhandler()
    // {
    //     this.setState({
    //         message:'Thank you for clicking'
    //     })
    // }
    render() {
        return (
            <div>
              <h1>  <button>Click</button> </h1> 
            </div>
        );
    }
}

export default eventbind;