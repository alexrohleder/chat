import React from "react";
import ChatInput from "./ChatInput";
import MessageContainer from "./MessageContainer";

function Chat() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex-1">
        <MessageContainer
          messages={[
            { content: "test", id: 1 },
            { content: "test 3", id: 2 },
            { content: "test 54", id: 3, isReceived: true },
            { content: "test 3", id: 4 },
          ]}
        />
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
