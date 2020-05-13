import React,{useState} from 'react'
function UseStateWithObjects(props:any){
 const [name,setName]=useState({firstName:'',lastName:''});
 return (
       <div>
         <form>  
          <div>
             <input type="text" value={name.firstName} 
             onChange={(e)=>setName({...name,firstName:e.target.value})}/> 
          </div>
          <div>
             <input type="text" value={name.lastName} 
             onChange={(e)=>setName({...name,lastName:e.target.value})}/> 
          </div>
          <div>
           FirstName {name.firstName} LastName {name.lastName}
          </div>
          <div>
           JSON Object Str:{JSON.stringify(name)}
          </div>
         </form>
       </div>
)


}
export default UseStateWithObjects;