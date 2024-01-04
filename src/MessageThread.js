import React, { useState } from "react";
import MessageBox from "./MessageBox";
import store from "./store";

const MessageThread = (props) => {
    const { dispatch, getState, subscribe } = store;
    const [userDetails, setUserDetails] = useState({
        threads: getState().users[props.from].threads,
        activeThread: getState().users[props.from].activeThread,
    });
    const messages = [...getState().users[props.from].threads[userDetails.activeThread].messages, ...getState().users[userDetails.activeThread].threads[props.from].messages];
    subscribe(() => {
        setUserDetails({
            threads: getState().users[props.from].threads,
            activeThread: getState().users[props.from].activeThread,
        });
    });
    return (
        <div className={props.className}>
        {Object.keys(userDetails.threads).map((thread, index) => {
            return (
                <button
                    style={{
                        backgroundColor: userDetails.activeThread === thread ? "tan" : "white"
                    }}
                    onClick={() => {
                        dispatch({
                            type: "SetActiveThread",
                            activeThread: thread,
                            from: props.from
                        });
                    }}
                    key={index}
                >
                    {thread}
                </button>
            );
        })}
        <MessageBox from={props.from} to={userDetails.activeThread} messages={messages}/>
        </div>
    );
};

export default MessageThread;