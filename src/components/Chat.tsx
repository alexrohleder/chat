import { useSelector } from "jotai/utils.cjs";
import React, { useCallback } from "react";
import ChatInput from "./ChatInput";
import MessageContainer from "./MessageContainer";
import { Message, messagesAtom } from "../state";

type Props = {
  contactId: number;
};

function Chat(props: Props) {
  const chatMessagesSelector = useCallback(
    (messages: Message[]) =>
      messages.filter(
        (message) =>
          message.receiverId === props.contactId ||
          message.senderId === props.contactId
      ),
    [props.contactId]
  );

  const chatMessages = useSelector(messagesAtom, chatMessagesSelector);

  return (
    <div className="flex flex-col lg:h-full bg-white border rounded-md">
      <div className="flex-1">
        <MessageContainer messages={chatMessages} />
      </div>
      <div className="sticky bottom-0 border-t">
        <ChatInput contactId={props.contactId} />
      </div>
    </div>
  );
}

export default Chat;
