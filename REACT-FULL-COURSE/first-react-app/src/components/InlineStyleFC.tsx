import React from 'react'
//camelcase of css prop name
const headStyle={
 fontSize:'16px',
 color:'yellow'
};
function InlineStyleFC() {
    return (
        <div>
           {/* <h1 style={headStyle}>MADHU</h1> */}
           <h1 className='error'>MADHU</h1>
           {/*<h1 className={styles.success}>MADHU</h1> will not work*/}
        </div>
    )
}

export default InlineStyleFC
