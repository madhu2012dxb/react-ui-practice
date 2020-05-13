import React from 'react'

function Title() {
    console.log('Rendering Title Component')
    return (
        <div>
            This is Title Component
        </div>
    )
}

export default React.memo(Title)
