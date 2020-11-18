import { atom } from "jotai";
import { atomWithReducer } from "jotai/utils.cjs";
import * as fixtures from "./state.fixtures";

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

export const userAtom = atom<User>(fixtures.user);
export const contactsAtom = atom<User[]>(fixtures.contacts);

type MessagesAtomReducerPayload = {
  senderId: number;
  receiverId: number;
  content: string;
};

export const messagesAtom = atomWithReducer<
  Message[],
  MessagesAtomReducerPayload
>(fixtures.messages, (current, message) => {
  return [
    ...current,
    {
      id: current.length + 1,
      ...message,
    },
  ];
});
