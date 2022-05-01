import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { Button } from "./Button";
import CreateRoomButton from "./CreateRoomButton";

type Props = {};

const DashboardNav = (props: Props) => {
  const { logout, currentUser } = useAuth();

  
  return (
    <nav className="flex items-center justify-start space-x-4">
      <img
        className="w-12 h-12 border-2 border-black rounded-full cursor-pointer"
        src={
          currentUser.photoURL ||
          `https://ui-avatars.com/api/?name=user`
        }
      />
      <Button onClick={logout}>Logout.</Button>
      <CreateRoomButton />
    </nav>
  );
};

export default DashboardNav;
