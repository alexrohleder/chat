import { useAtom } from "jotai";
import React, { FormEvent, useState } from "react";
import { sendMessageAtom } from "../actions";

type Props = {
  contactId: number;
};

function ChatInput(props: Props) {
  const [value, setValue] = useState("");
  const [, sendMessage] = useAtom(sendMessageAtom);

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    sendMessage({ receiverId: props.contactId, content: value });

    setValue("");
  }

  return (
    <form
      className="flex gap-4 bg-white border border-gray-200 rounded-md p-4"
      onSubmit={onSubmit}
    >
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="h-full flex-1 border border-gray-400 rounded-md p-2"
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
