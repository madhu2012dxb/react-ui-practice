import React from 'react'

function ChildCompoent(props:any){
 return (
        <button onClick={()=>props.clickHandler('child')}>Button</button>
        )
}
export default ChildCompoent;