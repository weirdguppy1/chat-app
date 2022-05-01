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
    navigate(`/rooms/${code}`)
    setCode("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <label>Room Code:</label>
      <input
        onChange={(e) => setCode(e.target.value)}
        value={code}
        className="px-2 py-1 text-black transition duration-500 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-white"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RoomForm;
