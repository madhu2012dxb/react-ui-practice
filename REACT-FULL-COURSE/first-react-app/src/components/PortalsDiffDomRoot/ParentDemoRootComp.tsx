import React, { Component } from 'react'
import ChildPortalComp from './ChildPortalComp';

class ParentDemoRootComp extends Component {
    render() {
        return (
            <div>
               This is parent
               <ChildPortalComp/> 
            </div>
        )
    }
}
export default ParentDemoRootComp;
