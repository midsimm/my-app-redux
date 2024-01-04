import React, { useState } from "react";
import store from "./store";

const MessageInput = (props) => {
  const { dispatch } = store;
  const [inputText, setInputText] = useState("");

  const updateInputValue = (evt) => {
    setInputText(evt.target.value);
  };

  const onPressEnter = (evt) => {
    if (evt.keyCode === 13) {
      onClickHandlerAddMessage();
    }
  };

  const onClickHandlerAddMessage = () => {
    dispatch({
      type: "AddMessage",
      message: {
        text: inputText,
        timeStamp: new Date().getTime(),
        from: props.from,
        to: props.to
      }
    });

    setInputText("");
  };

  return (
    <div>
      <span>{props.from}:</span>
      <input value={inputText} onChange={updateInputValue} onKeyDown={onPressEnter}/>
      <button icon="add" onClick={onClickHandlerAddMessage}>
        Add Message
      </button>
    </div>
  );
};

export default MessageInput;