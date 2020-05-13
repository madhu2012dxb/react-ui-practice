import React, { useState } from "react";

function UseStateWithArray() {
  const [items, setItems] = useState([{ id: 0, value: 0 }]);
  /*const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }]);
    }
    */
  const addItem = () => {
    setItems((oldItems) => {
      return [
        ...oldItems,
        {
          id: items.length,
          value: Math.floor(Math.random() * 10) + 1,
        },
      ];
    });
  };

  return (
    <div>
      <div>
        <button onClick={addItem}>Add number</button>
      </div>
      <div>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </div>
    </div>
  );
}

export default UseStateWithArray;
