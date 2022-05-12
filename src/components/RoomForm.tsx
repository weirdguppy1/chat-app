import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUtils from "../hooks/useUtils";
import { Button } from "./Button";

type Props = {};

const RoomForm = (props: Props) => {
  const [code, setCode] = useState("");
  const { joinRoom } = useUtils();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Code: " + code);
    navigate(`/rooms/${code}`);
    setCode("");
  };

  return (
    <div className="flex flex-col items-center p-10 space-y-12 text-black bg-white border-2 border-black shadow-xl rounded-xl">
      <h1 className="font-serif text-5xl">Join a room.</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <label>Room Code:</label>
        <input
          onChange={(e) => setCode(e.target.value)}
          value={code}
          className="px-2 py-1 text-black transition duration-500 border-2 border-black rounded-xl focus:ring-2 focus:ring-blue-300"
        />
        <Button className="text-white bg-gradient-to-r from-cyan-500 to-blue-600" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default RoomForm;
