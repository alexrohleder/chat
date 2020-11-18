import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils.cjs";
import React, { FormEvent, useEffect, useRef } from "react";
import { messagesAtom, userAtom } from "../state";

type Props = {
  contactId: number;
};

function ChatInput(props: Props) {
  const inputRef = useRef(null);
  const [{ id: senderId }] = useAtom(userAtom);
  const sendMessage = useUpdateAtom(messagesAtom);

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    const content = inputRef.current.value;

    sendMessage({ receiverId: props.contactId, senderId, content });

    inputRef.current.focus(); // on mobile we loose focus
    inputRef.current.value = "";

    requestAnimationFrame(() => window.scrollTo(0, document.body.scrollHeight));
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.contactId]);

  return (
    <form className="flex gap-4 p-4 bg-white" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="h-full flex-1 border rounded-md p-2"
        placeholder="Write a message..."
        autoComplete="off"
        autoFocus
        required
      />
      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
}

export default ChatInput;
