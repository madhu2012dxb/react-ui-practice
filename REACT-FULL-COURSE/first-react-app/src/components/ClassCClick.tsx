import React, { Component } from 'react';

class ClassCClick extends Component {
    clickHandler(){
        console.log("Button Clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Button</button> 
            </div>
        );
    }
}

export default ClassCClick;