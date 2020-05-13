import React from 'react'
import '../css/MyStyels.css'
function SyleSheetComponent(props:any){
const classNm=props.primary?'primary':'';

return <h1 className={classNm}>Hi</h1>;
//return <h1 className='primary'>Hi</h1>;
}
export default SyleSheetComponent;

// to specify multiple class can use backticks literal
// className={'${classNm} font-xl'}, can also use classnames lib


