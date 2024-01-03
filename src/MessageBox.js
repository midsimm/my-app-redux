import React, { useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import store from "./store";

const MessageBox = () => {
    const { getState, subscribe } = store;
    const [state, setState] = useState(getState());

    subscribe(() => setState(getState()));

    return (
        <div>
            <Messages messages={state.messages} />
            <MessageInput />
        </div>
    );
};

export default MessageBox;