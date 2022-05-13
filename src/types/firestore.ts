import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";

export type MessageType = {
  author: any;
  message: string;
  id: string;
  timeStamp: Timestamp;
};

export interface ChatRoomInterface {
  messages: MessageType[];
  members: User[];
  name: string;
  id: string;
}
