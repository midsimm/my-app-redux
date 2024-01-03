import React from "react";

const Messages = (props) => {
  const messages = props.messages;
  
  return (
      <ul className="messages">
        {
          messages.map((message, index) => {
            return (
              <li key={index}> {message} </li>
            );
          })
        }
      </ul>
  );
};

export default Messages;