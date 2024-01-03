import React, { useState } from "react";
import store from "./store";

const MessageInput = () => {
  const { dispatch } = store;
  const [inputText, setInputText] = useState("");

  const updateInputValue = (evt) => {
    setInputText(evt.target.value);
  };

  const onClickHandlerAddMessage = () => {
    dispatch({
      type: "AddMessage",
      message: inputText
    });

    setInputText("");
  };

  return (
    <div>
      <input value={inputText} onChange={updateInputValue} />
      <button icon="add" onClick={onClickHandlerAddMessage}>
        Add Message
      </button>
    </div>
  );
};

export default MessageInput;