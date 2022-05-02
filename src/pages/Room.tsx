import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import useUtils from "../hooks/useUtils";
import ChatMessages from "../components/chat/ChatMessages";

type Props = {};

const Room = (props: Props) => {
  const router = useParams<{ roomId: string }>();
  const { roomId } = router;
  const { chatRoomExists } = useUtils();
  const [exists, setExists] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleRoomExists = async () => {
    setLoading(true);
    const result = await chatRoomExists(roomId || "");
    if (!result) setExists(false);
    setLoading(false);
  };

  useEffect(() => {
    handleRoomExists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (roomId?.length !== 5) {
    return <ErrorPage message="Chat room format not valid." />;
  }

  if (!exists) {
    return <ErrorPage message="Chat room not found." />;
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-blue-900 to-cyan-700">
      <ChatMessages roomId={roomId} />
    </div>
  );
};

export default React.memo(Room);
