import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureComp extends PureComponent<any,any> {
    render() {
        console.log('PureComp render called');
        return (
            <div>
               This is pure component name from parent:{this.props.name}
            </div>
        );
    }
}
export default PureComp;