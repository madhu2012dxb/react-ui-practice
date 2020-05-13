import React from 'react'

function Count(props:any) {
    console.log(`Rendering count component for ${props.text} ${props.count}`)

    return (
        <div>
            {props.text} :: {props.count}
        </div>
    )
}

export default React.memo(Count)
