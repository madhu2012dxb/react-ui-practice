import React, { useState } from "react";
import CompoentClassWillUnmout from "./CompoentClassWillUnmout";
import FuncCompWillUnmout from "./FuncCompWillUnmout";

function ToggleContainerToCheckUnmount() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>ToggletIt</button>
      {/*{display && <CompoentClassWillUnmout/>}*/}
      {/* } <ToggleContainerToCheckUnmount/> it loops if you do it*/}
      {display && <FuncCompWillUnmout/>}
    </div>
  );
}

export default ToggleContainerToCheckUnmount;
