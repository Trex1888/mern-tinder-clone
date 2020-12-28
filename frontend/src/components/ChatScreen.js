import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../styles/ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Tom",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.XswSF4C9-xHXVV8Tz4ubWAHaE5&pid=Api&P=0&w=255&h=170",
      message: "Hello??",
    },
    {
      name: "Tom",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.XswSF4C9-xHXVV8Tz4ubWAHaE5&pid=Api&P=0&w=255&h=170",
      message: "What are you up to?",
    },
    {
      message: "Going for a walk!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH BECKY ON 10/30/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text"></p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
