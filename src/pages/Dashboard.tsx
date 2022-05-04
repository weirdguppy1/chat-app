import React from "react";
import { Toaster } from "react-hot-toast";
import DashboardNav from "../components/DashboardNav";
import RoomForm from "../components/RoomForm";
import RoomsList from "../components/RoomsList";
import { useMisc } from "../contexts/MiscContext";

const Dashboard = () => {
  const { modalOpen } = useMisc();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-2 space-y-6 font-sans bg-gradient-to-r from-cyan-500 to-blue-600 ${
        modalOpen ? "blur-lg" : null
      }`}
    >
      <Toaster position="top-right"/>
      <div className="mt-12" />
      <RoomsList />
      <DashboardNav />
      <RoomForm />
    </div>
  );
};

export default Dashboard;
