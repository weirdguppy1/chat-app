import React, { useState } from "react";
import { Button } from "./Button";
import { Dialog } from "@headlessui/react";
import useUtils from "../hooks/useUtils";
import { useMisc } from "../contexts/MiscContext";

type Props = {};

const CreateRoomButton = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const { createRoom } = useUtils();
  const { setModalOpen } = useMisc();
  function closeModal() {
    setIsOpen(false);
    setModalOpen(false)
  }

  function openModal() {
    setIsOpen(true);
    setModalOpen(true);
  }

  const handleCreateRoom = (e: any) => {
    e.preventDefault();
    if (!name.trim()) return;
    setName("");
    createRoom(name.trim());
  };

  return (
    <>
      <Button type="button" onClick={openModal}>
        Create Room.
      </Button>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        as="div"
        className={
          "fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
        }
      >
        <div className="flex flex-col px-4 py-8 text-center text-white bg-blue-500 w-96 h-96 rounded-xl">
          <Dialog.Title className="text-3xl ">Create Room.</Dialog.Title>
          <div className="flex flex-col items-center mt-10">
            <form
              onSubmit={handleCreateRoom}
              className="flex flex-col items-center space-y-4"
            >
              <label>Name of Chat Room:</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="px-2 py-1 text-black border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300"
              />
              <div className="flex items-center space-x-4 ">
                <Button type="submit" className="text-white bg-green-500">
                  Create Room.
                </Button>
                <button className="underline" onClick={closeModal}>
                  Cancel.
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CreateRoomButton;
