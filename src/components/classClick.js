import React, { Component } from 'react';

class classClick extends Component {
    clickHandler(){
        console.log("You clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click Here</button>
            </div>
        )
    }
}

export default classClick;