import { atom } from "jotai";
import { messagesAtom, userAtom } from "./state";

export const sendMessageAtom = atom<
  null,
  { receiverId: number; content: string }
>(null, (get, set, payload) => {
  const currentMessages = get(messagesAtom);

  set(messagesAtom, [
    ...currentMessages,
    {
      id: currentMessages.length + 1,
      senderId: get(userAtom).id,
      ...payload,
    },
  ]);
});
