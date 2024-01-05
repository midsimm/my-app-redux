import React, { useState } from "react";
import MessageBox from "./MessageBox";
import store from "./store";
import UserContext from "./UserContext";

const MessageThread = (props) => {
    const from = React.useContext(UserContext);
    const { dispatch, getState, subscribe } = store;
    const [userDetails, setUserDetails] = useState({
        threads: getState().users[from].threads,
        activeThread: getState().users[from].activeThread,
    });
    const messages = [...getState().users[from].threads[userDetails.activeThread].messages, ...getState().users[userDetails.activeThread].threads[from].messages];
    subscribe(() => {
        setUserDetails({
            threads: getState().users[from].threads,
            activeThread: getState().users[from].activeThread,
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
                            from: from
                        });
                    }}
                    key={index}
                >
                    {thread}
                </button>
            );
        })}
        <MessageBox from={from} to={userDetails.activeThread} messages={messages}/>
        </div>
    );
};

export default MessageThread;