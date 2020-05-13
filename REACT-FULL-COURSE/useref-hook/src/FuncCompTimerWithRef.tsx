import React, { useEffect, useState, useRef } from "react";

function FuncCompTimerWithRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef:any = useRef();
 // var interval:any; this way will not work use cosnt inside useeffect
  useEffect(() => {
    //const interval = setInterval(() => {
        intervalRef.current=setInterval(() => {
      setTimer((prevTimer)=>prevTimer + 1);
    }, 1000);
    return ()=>{
        //clearInterval(interval)
        clearInterval(intervalRef.current)
        
    };
  },[]);
  return <div>
      Class Timer: {timer}
      <div>
          <button onClick={()=>clearInterval(intervalRef.current)}>Clear the timer</button>
      </div>
  </div>;
}

export default FuncCompTimerWithRef;
