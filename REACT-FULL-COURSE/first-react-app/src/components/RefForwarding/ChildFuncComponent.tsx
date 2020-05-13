import React from "react";

const ChildFuncComponent = React.forwardRef((props: any, ref: any) => {
  console.log(props);
  return (
    <>
      <div>This is child Comp</div>
      <input type="text" ref={ref} />
    </>
  );
});
export default ChildFuncComponent;
