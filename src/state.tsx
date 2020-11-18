import { atom } from "jotai";
import {
  contactsFixture,
  messagesFixture,
  userFixture,
} from "./state.fixtures";

export type Message = {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
};

export type User = {
  id: number;
  name: string;
  photo: string;
  isActive: boolean;
};

export const messagesAtom = atom<Message[]>(messagesFixture);
export const userAtom = atom<User>(userFixture);
export const contactsAtom = atom<User[]>(contactsFixture);
