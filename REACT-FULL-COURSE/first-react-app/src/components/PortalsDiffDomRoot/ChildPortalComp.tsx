import React from 'react'
import ReactDOM from 'react-dom';

function ChildPortalComp() {
    return ReactDOM.createPortal(
        <div>
            This is child Comp
        </div>,document.getElementById('portal-root')!
    );
}
export default ChildPortalComp;
