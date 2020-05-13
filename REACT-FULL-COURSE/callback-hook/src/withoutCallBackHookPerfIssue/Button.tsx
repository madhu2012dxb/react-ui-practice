import React from 'react'

function Button(props:any) {
    console.log(`Rendering Button for ${props.children}`)
    return (
        <div>
            <button onClick={props.handleClick}>{props.children}</button>
        </div>
    )
}

export default React.memo(Button)
