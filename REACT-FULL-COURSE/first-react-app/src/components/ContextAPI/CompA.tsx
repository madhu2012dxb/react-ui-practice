import React, { Component } from 'react'
import CompB from './CompB'
import { UserContext } from './UserContext';

class  CompA extends Component<any,any> {
    render() {
     return (  <div>
           context value {this.context}
          <CompB/>  
        </div> );
    }
}
CompA.contextType=UserContext;
export default CompA
