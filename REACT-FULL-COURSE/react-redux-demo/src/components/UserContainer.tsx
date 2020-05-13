import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/users/userActions'

function UserContainer(props:any) {
    useEffect(()=>{
      props.listUserIds()
    },[])
    return  props.userData.loading?(<h2>Loading...</h2>):
props.userData.error?(<h2>{props.userData.error}</h2>):
<div><h2>UserList:
    <div>
    {props.userData.users && props.userData.users.map((user:any)=><p>User name:{user.name}</p>)}
    </div>
    </h2></div>
}
const mapStateToProps=(state:any)=>{
    return {
        userData:state
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return {
        listUserIds:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
