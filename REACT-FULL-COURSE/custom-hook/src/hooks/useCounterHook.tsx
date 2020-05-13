import React, { useState } from "react";

function useCounterHook(initialCounter: number = 0, value: number) {
  console.log('Calling counter hook')  
  const [count, setCount] = useState(initialCounter);
  const incrementCount:any = () => {
    setCount((prevState) => prevState + value);
  };
  const decrementCount:any = () => {
    setCount((prevState) => prevState - value);
  };
  const resetCount:any = () => {
    setCount(() => initialCounter);
  };

  return [count,incrementCount,decrementCount,resetCount]

}

export default useCounterHook;
