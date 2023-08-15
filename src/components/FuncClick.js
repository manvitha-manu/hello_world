import React, { Component } from 'react';

function FunctionClick()
{
    function clickHandler(){
        console.log("You Clicked")
    }
    return(
        <div>
            <button onClick={clickHandler}>Click Here!</button>
    </div>
    )
   
}

export default FunctionClick;