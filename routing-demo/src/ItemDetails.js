import React,{useState,useEffect} from 'react';
import './App.css'
import {Link} from 'react-router-dom'
function ItemDetails({match}) {
  const [item,setItem]=useState({});
  useEffect(()=>{
    console.log(match.params);  
    fetchItem();
  },[])
  const fetchItem=async ()=>{
    //<Route path="/shop/:id" component={ItemDetails}/>
    const data=await fetch(`https://jsonplaceholder.typicode.com/albums/${match.params.id}`);
    const item=await data.json();
    console.log(item);
    setItem(item);
  }
  return (
    <div>
       <h1>Item:{item.id} userid:{item.userId} title: {item.title}</h1>
    </div>
  );
}

export default ItemDetails;
