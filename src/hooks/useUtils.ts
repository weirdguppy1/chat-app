import { MessageType } from "./../types/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { nanoid } from "nanoid";
import { ChatRoomInterface } from "../types/firestore";
import toast from "react-hot-toast";

const useUtils = () => {
  const user = auth.currentUser;

  const ref = (collection: string, id: string) => {
    return doc(db, collection, id);
  };

  const createRoom = async (name: string) => {
    const uniqueId = nanoid(5);
    const userDoc = await getDoc(ref("users", user?.uid || ""));

    const defaultRoom: ChatRoomInterface = {
      messages: [],
      members: [],
      id: uniqueId,
      name: name,
    };

    if (!userDoc.exists()) {
      await setDoc(ref("users", user?.uid || ""), {
        rooms: [],
      });
    }

    const data = userDoc.data();
    if (data?.rooms.length >= 3) {
      toast.error("Maximum chat rooms reached.");
      return;
    }

    await setDoc(ref("rooms", uniqueId), defaultRoom)
      .then(() => toast.success("Created chat room! Enjoy!"))
      .catch(() => toast.error("Error trying to create chat room."));
    await updateDoc(ref("rooms", uniqueId), {
      members: arrayUnion(ref("users", user?.uid || "")),
    });

    await updateDoc(ref("users", user?.uid || ""), {
      rooms: arrayUnion(ref("rooms", uniqueId)),
    });
  };

  const joinRoom = async (roomId: string) => {
    if (roomId.length !== 5 || (await chatRoomExists(roomId)) === false) {
      return;
    }

    if (!user?.uid) return;

    await updateDoc(ref("rooms", roomId), {
      members: arrayUnion(ref("users", user?.uid)),
    });

    await updateDoc(ref("users", user?.uid), {
      rooms: arrayUnion(ref("rooms", roomId)),
    });
  };

  const addChat = async (roomId: string, message: string) => {
    const messageId = nanoid(10);

    if (!roomId) return;
    if (message.length >= 100) {
      toast.error("Message too long.");
      return;
    }

    const chatUser = {
      displayName: user?.displayName,
      uid: user?.uid,
      photoURL: user?.photoURL,
    };

    const newMessage: MessageType = {
      message: message,
      id: messageId,
      author: chatUser,
    };

    await updateDoc(ref("rooms", roomId), {
      messages: arrayUnion(newMessage),
    });
  };

  const chatRoomExists = async (roomId: string) => {
    const document = await getDoc(ref("rooms", roomId));
    return document.exists();
  };

  const deleteRoom = async (roomId: string) => {
    // const data = await (await getDoc(ref("users", user?.uid || ""))).data()
    // console.log(data?.rooms)

    await updateDoc(ref("users", user?.uid || ""), {
      rooms: arrayRemove(ref("rooms", roomId)),
    });
    await deleteDoc(ref("rooms", roomId));
  };

  const getMessages = async (roomId: string) => {
    const doc = await getDoc(ref("rooms", roomId));
    if (!doc.exists()) return;

    return doc.data();
  };

  return {
    createRoom,
    deleteRoom,
    addChat,
    chatRoomExists,
    joinRoom,
    getMessages,
  };
};

export default useUtils;
