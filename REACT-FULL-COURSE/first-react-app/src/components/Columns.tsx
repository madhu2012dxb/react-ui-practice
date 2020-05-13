import React from 'react'

function Columns() {
    return (
       // <div>
        //  <td>name</td>
         // <td>madhu</td>  
        //</div>   div should not be parent of td so use fragment

        <React.Fragment>
          <td>name</td>
          <td>madhu</td>  
        </React.Fragment>
        //short hand <>
       // <>
       // <td>name</td>
       // <td>madhu</td>  
      //</>



    )
}

export default Columns
