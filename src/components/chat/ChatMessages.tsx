import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDocData from "../../hooks/useDocData";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

type Props = {
  roomId: string;
};

const BackArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
  );
};

const ChatMessages = (props: Props) => {
  const [value, loading, error] = useDocData("rooms", props.roomId);
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [value]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading chat messages...</div>;
  }

  if (value) {
    console.log(value);
  }

  return (
    <div className="flex flex-col items-start h-full p-2 space-y-8 text-white">
      <div className="flex flex-col space-y-2 shadow-2xl">
        <h1 className="font-mono text-3xl italic">{value?.name}</h1>
        <h1 className="font-mono text-lg italic">Code: {props.roomId}</h1>
        <Link to="/dashboard">
          <button className="text-black flex items-center w-full p-2 space-x-8 bg-white rounded-b-xl">
            <BackArrow /> Go to dashboard.
          </button>
        </Link>
      </div>
      <div className="w-full space-y-2 overflow-y-scroll h-5/6 hide-scrollbar">
        {value?.messages.map((message: any) => {
          return (
            <ChatMessage
              key={message.id}
              message={message.message}
              author={message.author}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="w-full h-1/6">
        <ChatInput roomId={props.roomId} />
      </div>
    </div>
  );
};

export default ChatMessages;
