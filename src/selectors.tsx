import { atom } from "jotai";
import { Message, messagesAtom } from "./state";

export const chatAtom = (contactId: number) =>
  atom<Message[]>((get) =>
    get(messagesAtom).filter(
      (message) =>
        message.receiverId === contactId || message.senderId === contactId
    )
  );
