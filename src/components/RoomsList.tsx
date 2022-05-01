import { getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useDocData from "../hooks/useDocData";
import { ChatRoomInterface } from "../types/firestore";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

type RoomSectionProps = {
  room: any;
};

const RoomSection = (props: RoomSectionProps) => {
  const [data, setData] = useState<ChatRoomInterface | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getDocWrapper();
  }, []);

  const getDocWrapper = async () => {
    setLoading(true)
    const doc = await getDoc(props.room);
    const data: any = doc.data();
    console.log(data.name);
    setData(data);
    setLoading(false);
  };

  const handleClick = () => {
    navigate(`/rooms/${data?.id}`)
  }

  return (
    <div onClick={handleClick} className="container flex flex-col px-4 py-4 space-y-2 transition bg-white border-2 border-black cursor-pointer w-full md:w-[20rem] lg:w-[28rem] duration-250 rounded-xl hover:shadow-lg hover:shadow-white">
      <div className="">
        <h1 className="text-2xl italic">{data?.name}</h1>
        <p className="text-md">Members: {data?.members.length}</p>
        <p className="font-bold text-md ">Code: {data?.id}</p>
      </div>
    </div>
  );
};

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
        return <RoomSection key={nanoid(20)} room={room} />;
      })}
    </div>
  );
};

export default React.memo(RoomsList);
