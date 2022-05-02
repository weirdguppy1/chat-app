import React from "react";
import DashboardNav from "../components/DashboardNav";
import RoomForm from "../components/RoomForm";
import RoomsList from "../components/RoomsList";
import { useMisc } from "../contexts/MiscContext";

const Dashboard = () => {
  const { modalOpen } = useMisc();

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen p-2 space-y-6 font-sans bg-gradient-to-r from-cyan-500 to-blue-600 ${
        modalOpen ? "blur-lg" : null
      }`}
    >
      <RoomsList />
      <DashboardNav />
      <RoomForm />
    </div>
  );
};

export default Dashboard;
