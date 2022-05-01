import React, { useState } from "react";
import useUtils from "../../hooks/useUtils";
import { Button } from "../Button";

type Props = {
  roomId: string;
};

const ChatInput = (props: Props) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { addChat } = useUtils();

  const handleMessageChange = (e: any) => {
    if (e.target.value.length >= 40) return;
    setMessage(e.target.value);
  };

  const handleAddChat = (e: any) => {
    e.preventDefault();

    if(message.trim() === "") return;
    
    setMessage("");
    setLoading(true);
    addChat(props.roomId, message);
    setLoading(false);
  };

  const handleReactionClick = (emoji: string) => {
      setMessage(message => message + emoji)
  } 

  return (
    <form className="flex flex-col w-full space-y-2" onSubmit={handleAddChat}>
      <div className="flex items-center w-full space-x-2">
        <input
          className="w-full px-2 py-3 text-lg transition border-2 border-black rounded-lg duration-250 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={handleMessageChange}
          disabled={loading}
        />
        <Button disabled={loading} className="py-3" type="submit">
          Send
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <h1>Reactions!</h1>
        <Button onClick={() => handleReactionClick("🔥")} type="button">🔥</Button>
        <Button onClick={() => handleReactionClick("😂")} type="button">😂</Button>
        <Button onClick={() => handleReactionClick("😎")} type="button">😎</Button>
      </div>
    </form>
  );
};

export default ChatInput;
