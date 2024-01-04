import React from "react";
import store from "./store";

const Messages = (props) => {
    const { dispatch } = store;
    const messages = props.messages;
    messages.sort((a, b) => {
        return new Date(a.timeStamp) - new Date(b.timeStamp);
    });
    let id = -1;

    return (
        <ul className="messages"
            style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#e8e8e8",
                padding: "8px",
                marginTop: "0",
                }}>
            {    
                messages.map((message, index) => {

                    if(message.from === props.from) {
                        id++;
                    }

                    return (
                        <li
                            style={{
                                alignSelf: props.from === message.from ? "end" : "start",
                                backgroundColor: props.from === message.from ? "lightgreen" : "white",
                                margin: "8px 0"
                            }}
                            key={index}
                            num={id}
                            onClick={(e) => {
                                message.from === props.from &&
                                    dispatch({
                                    type: "DeleteMessage",
                                    id: parseInt(e.target.getAttribute("num")),
                                    from: props.from,
                                    to: props.to
                                    });
                            }}>
                            {message.text} - {new Date(message.timeStamp).toLocaleTimeString()}
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Messages;