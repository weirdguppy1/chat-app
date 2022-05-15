import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Timestamp } from "firebase/firestore";
import { TrashIcon } from "../Icons";
import useUtils from "../../hooks/useUtils";
import { useAuth } from "../../contexts/AuthContext";
import { useMisc } from "../../contexts/MiscContext";
import { Dialog } from "@headlessui/react";
import { Button } from "../Button";

type Props = {
  message: string;
  author: any;
  timeStamp: Timestamp;
  roomId: string;
  messageId: string;
};

// function isEmoji(str: string) {
//   if (/\p{Emoji}/u.test(str) && str.length === 1) return true;
//   return false;
// }

const ChatMessage = (props: Props) => {
  const { message, author, timeStamp } = props;
  const { deleteMessage } = useUtils();
  const { currentUser } = useAuth();
  const { setModalOpen } = useMisc();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    deleteMessage(props.roomId, props.messageId);
    closeModal();
  };

  function closeModal() {
    setIsOpen(false);
    setModalOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    setModalOpen(true);
  }

  return (
    <div className="flex items-start space-x-6">
      <div className="flex flex-col items-center space-y-2">
        <Tippy content={`${author.displayName}`}>
          <img
            className="w-12 h-12 border-2 border-gray-200 rounded-xl min-w-12 min-h-12"
            src={author.photoURL}
          />
        </Tippy>
        <div className="text-xs text-gray-300">
          {timeStamp.toDate().toLocaleTimeString()}
        </div>
        {currentUser.uid == author.uid ? (
          <button onClick={openModal}>
            <TrashIcon className="w-4 h-4 text-white" />
          </button>
        ) : null}
      </div>
      <div className="max-w-sm px-4 py-2 text-sm text-black bg-white border-2 border-gray-200 rounded-xl word-break">
        {message}
      </div>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        as="div"
        className={
          "fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
        }
      >
        <div className="flex flex-col items-center justify-center px-4 py-8 text-center text-black bg-white rounded-lg bg-gradient-to-tr ">
          <Dialog.Title className="text-2xl">Delete Message?</Dialog.Title>
          <div className="flex items-center mt-10 space-x-4">
            <Button onClick={closeModal} className="border-2 border-black">
              Cancel
            </Button>
            <Button onClick={handleDelete} className="text-white bg-red-500">
              Delete
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ChatMessage;
