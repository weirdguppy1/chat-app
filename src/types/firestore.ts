import { User, UserInfo } from "firebase/auth";

export type MessageType = {
  author: any;
  message: string;
  id: string;
};

export interface ChatRoomInterface {
  messages: MessageType[];
  members: User[];
  name: string;
  id: string;
}
