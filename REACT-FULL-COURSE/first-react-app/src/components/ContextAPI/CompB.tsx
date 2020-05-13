import React from 'react'
import { UserConsumer } from './UserContext'

function CompB() {
    return (
        <UserConsumer>
        { (name:any) =>{
            return <div>This is component B : Hello {name}</div>
        }
         

        }

        </UserConsumer>
    )
}

export default CompB
