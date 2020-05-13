import React from 'react'

function MemoComp(props:any) {
    console.log('Memo Component render called')
    return (
        <div>
            This is memo component received name from parent:{props.name}
        </div>
    )
}

export default React.memo(MemoComp);
