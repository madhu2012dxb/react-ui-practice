import React, { useMemo, useState } from "react";

function CounterWithUseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
//   const isEven = () => {
//     var i: number = 0;
//     for (i = 0; i < 600000000; i++) {
//       i++;
//     }
//     return counterOne % 2 === 0;
//   };

const isEven = useMemo(() => {
    var i: number = 0;
    for (i = 0; i < 600000000; i++) {
      i++;
    }
    return counterOne % 2 === 0;
  },[counterOne]);


  return (
    <div>
      <div>
        <div>Counter One:{counterOne}</div>
        <div>Is Even? {isEven ? "Even" : "Odd"}</div>
        <div>
          <button onClick={incrementCounterOne}>Increment Counter One</button>
        </div>
      </div>
      <div>
        <div>Counter Two:{counterTwo}</div>
        <div>
          <button onClick={incrementCounterTwo}>Increment Counter Two</button>
        </div>
      </div>
    </div>
  );
}

export default CounterWithUseMemoHook;
