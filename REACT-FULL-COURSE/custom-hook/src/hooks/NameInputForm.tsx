import React from 'react'
import useInput from './useInput'

function NameInputForm() {
    
    const [firstName,resetFirstName,bindFirstName]=useInput('');
    const [lastName,resetLastName,bindLastName]=useInput('');
    const clickHandler=(e:any)=>{
        e.preventDefault();
        alert( `Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();

    }
    return (
        <div>
            <form onSubmit={clickHandler}>
            <div>
            <label>FirstName</label>
            <input type="text" {...bindFirstName}/>
            </div>
            <div>
            <label>FirstName</label>
            <input type="text" {...bindLastName}/>
            </div>
            <div>
                <button>Submit</button>
            </div>

            </form>
        </div>
    )
}

export default NameInputForm
