import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDocData from "../../hooks/useDocData";
import { Button } from "../Button";
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

  return (
    <div className="flex flex-col items-start h-full space-y-8 text-white">
      <div className="flex flex-col w-full p-2 space-y-2 text-black bg-white border-b-2 border-black">
        <Link to="/dashboard">
          <Button className="flex space-x-4 text-white bg-gradient-to-r from-cyan-600 to-blue-600 ">
            <BackArrow /> Go to dashboard.
          </Button>
        </Link>
        <h1 className="text-3xl font-bold word-break">{value?.name}</h1>
        <h2 className="text-lg">
          Code: <span className="underline">{props.roomId}</span>
        </h2>
      </div>
      <div className="w-full p-2 space-y-4 overflow-y-scroll h-5/6 hide-scrollbar">
        {value?.messages.map((message: any) => {
          return (
            <ChatMessage
              timeStamp={message.timeStamp}
              key={message.id}
              message={message.message}
              author={message.author}
              roomId={props.roomId}
              messageId={message.id}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="w-full p-2 h-1/6">
        <ChatInput roomId={props.roomId} />
      </div>
    </div>
  );
};

export default ChatMessages;
