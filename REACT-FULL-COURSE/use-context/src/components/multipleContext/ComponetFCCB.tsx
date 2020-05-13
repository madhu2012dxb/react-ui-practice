import React,{useContext} from 'react'
import ComponetFCCC from './ComponetFCCC'
import { UserContext, ChannelContext } from "../../App";
function ComponetFCCB() {
    const user=useContext(UserContext);
    const channel=useContext(ChannelContext);
    return (
        <div>
            <ComponetFCCC/>
            User:{user} Channel:{channel}
        </div>
    )
}
//useContext
export default ComponetFCCB
