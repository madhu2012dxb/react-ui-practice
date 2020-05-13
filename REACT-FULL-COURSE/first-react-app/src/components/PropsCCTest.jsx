import React, { Component } from 'react';

class PropsCCTest extends Component {
    render() {
        return (
            <div>
              Hi name: {this.props.name} and {this.props.age}
              <h1>{this.props.children}</h1>  
            </div>
        );
    }
}

export default PropsCCTest;