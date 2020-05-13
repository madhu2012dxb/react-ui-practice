import React, { Component } from 'react';

class DestructuringCC extends Component<any,any> 
{
    render() {
        const {name,age}=this.props;
        return (
            <div>
             Name:{name} Age:{age}             
            </div>
        );
    }
}

export default DestructuringCC;