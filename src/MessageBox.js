import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageBox = (props) => {

    return (
        <div className={"messageBox " + props.className}>
            <Messages from={props.from} to={props.to}/>
            <MessageInput from={props.from}/>
        </div>
    );
};

export default MessageBox;