import React,{useState,useEffect} from 'react';
import './App.css'
import {Link} from 'react-router-dom'
function Shop() {
  const [items,setItems]=useState([]);
  useEffect(()=>{
    fetchItems();
  },[])
  const fetchItems=async ()=>{
  const data=await fetch('https://jsonplaceholder.typicode.com/albums');
  const items=await data.json();
  console.log(items);
  setItems(items);
  }
  return (
    <div>
     {
        items.map(item=>(
        <h1 key={item.id}>
        <Link to={`/shop/${item.id}`}>  
        {item.title}
        </Link>
        </h1>
        ))
      }
    </div>
  );
}

export default Shop;
