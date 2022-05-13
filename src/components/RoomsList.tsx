import { getDoc } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useDocData from "../hooks/useDocData";
import { ChatRoomInterface } from "../types/firestore";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "./Icons";
import useUtils from "../hooks/useUtils";
import toast from "react-hot-toast";

type RoomSectionProps = {
  room: any;
};

const RoomSection = React.memo((props: RoomSectionProps) => {
  const [data, setData] = useState<ChatRoomInterface | null>(null);
  const [loading, setLoading] = useState(false);

  const { deleteRoom } = useUtils();
  const navigate = useNavigate();

  useEffect(() => {
    getDocWrapper();
  }, []);

  const getDocWrapper = async () => {
    setLoading(true);
    const doc = await getDoc(props.room);
    const docData: any = doc.data();
    setData(docData);
    console.log(docData);
    setLoading(false);
  };

  const handleClick = () => {
    navigate(`/rooms/${data?.id}`);
  };

  const handleDelete = () => {
    if (!data) return;
    deleteRoom(data.id)
      .then(() => toast.success(`Deleted chatroom ${data.id}`))
      .catch(() => toast.error("Error deleting chat room."));
  };

  return (
    <div className="flex items-center space-x-2 w-full sm:w-[28rem] md:w-[36rem]">
      <div
        onClick={handleClick}
        className="flex flex-col w-full px-4 py-6 transition bg-white border-2 border-black cursor-pointer word-break duration-250 rounded-xl hover:shadow-lg hover:shadow-white"
      >
        <h1 className="text-lg italic font-bold md:text-3xl">{data?.name}</h1>
        {/* <p className="text-md">Members: {data?.members.length}</p> */}
        <p className="text-sm font-semibold md:text-xl">Code: {data?.id}</p>
      </div>
      <button disabled={loading} onClick={handleDelete}>
        <TrashIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
});

const RoomsList = () => {
  const { currentUser } = useAuth();
  const [value, loading, error] = useDocData("users", currentUser.uid);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div className="flex flex-col items-center w-full space-y-4">
      {value?.rooms.map((room: any) => {
        return <RoomSection key={nanoid(10)} room={room} />;
      })}
    </div>
  );
};

export default RoomsList;
