import { useAtom } from "jotai";
import React, { useMemo } from "react";
import ChatInput from "./ChatInput";
import { chatAtom } from "../selectors";
import MessageContainer from "./MessageContainer";

type Props = {
  contactId: number;
};

function Chat(props: Props) {
  const [chatMessages] = useAtom(
    useMemo(() => chatAtom(props.contactId), [props.contactId])
  );

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex-1">
        <MessageContainer messages={chatMessages} />
      </div>
      <ChatInput contactId={props.contactId} />
    </div>
  );
}

export default Chat;
