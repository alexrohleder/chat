import React from "react";
import { useAtom } from "jotai";
import Message from "./Message";
import { Message as MessageType, userAtom } from "../state";

type Props = {
  messages: MessageType[];
};

function MessageContainer(props: Props) {
  const [user] = useAtom(userAtom);

  return (
    <div className="flex flex-col gap-2 bg-white border border-gray-200 rounded-md p-4 h-full">
      {props.messages.map((message) => (
        <div key={message.id}>
          <div className={message.senderId === user.id ? "float-right" : ""}>
            <Message {...message} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageContainer;
