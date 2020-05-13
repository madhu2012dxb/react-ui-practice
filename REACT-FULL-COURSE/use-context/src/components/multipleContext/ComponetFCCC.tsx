import React from "react";
import { UserContext, ChannelContext } from "../../App";
function ComponetFCCC() {
  return (
    // <div>
    //    This is component C
    //  <UserContext.Consumer>
    //    {(value)=>{
    //   return <div>User Contecxt Value{value}</div>
    //}}
    //</UserContext.Consumer>
    //</div>
    <div>
      This is component C
      <UserContext.Consumer>
        {(value) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User:{value} Channel:{channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponetFCCC;
