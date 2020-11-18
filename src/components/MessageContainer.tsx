import React from "react";
import Message from "./Message";

type Props = {
  messages: any[];
};

function MessageContainer(props: Props) {
  return (
    <div className="flex flex-col gap-2 bg-white border border-gray-200 rounded-md p-4 h-full">
      {props.messages.map((message) => (
        <div key={message.id}>
          <div className={message.isReceived ? "float-right" : ""}>
            <Message {...message} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageContainer;
