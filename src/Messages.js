import React, { useState } from "react";
import store from "./store";

const Messages = (props) => {
    const [messages, setMessages] = useState([...store.getState().messagesAbhi, ...store.getState().messagesSimran]),
        { dispatch, subscribe } = store;

    subscribe(() => {
        setMessages([...store.getState().messagesAbhi, ...store.getState().messagesSimran]);
    });

    messages.sort((a, b) => {
        return new Date(a.timeStamp) - new Date(b.timeStamp);
    });
    return (
        <ul className="messages"
            style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#e8e8e8",
                padding: "8px",
                }}>
            {
                messages.map((message, index) => {
                    return (
                        <li
                            style={{
                                alignSelf: props.from === message.from ? "end" : "start",
                                backgroundColor: props.from === message.from ? "lightgreen" : "white",
                                margin: "8px 0"
                            }}
                            key={index}
                            onClick={() => dispatch({
                                type: "DeleteMessage",
                                id: index,
                                from: props.from
                            })}>
                            {message.text} - {new Date(message.timeStamp).toLocaleTimeString()}
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Messages;