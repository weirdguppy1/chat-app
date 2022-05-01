import React from "react";
import DashboardNav from "../components/DashboardNav";
import RoomForm from "../components/RoomForm";
import RoomsList from "../components/RoomsList";
import { useMisc } from "../contexts/MiscContext";

const Dashboard = () => {
  const { modalOpen } = useMisc();

  return (
    <div className={`flex flex-col items-center justify-center h-screen p-2 space-y-6 font-sans bg-blue-300 ${modalOpen ? "blur-lg" : null}`}>
      <RoomsList />
      <DashboardNav />
      <div className="flex flex-col items-center p-10 space-y-12 text-white bg-blue-500 shadow-2xl rounded-xl shadow-blue-500">
        <h1 className="text-5xl italic">Join a room.</h1>
        <RoomForm />
      </div>
    </div>
  );
};

export default Dashboard;
