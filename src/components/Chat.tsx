import React from "react";
import ChatInput from "./ChatInput";
import MessageContainer from "./MessageContainer";

const messages = [
  { id: 1, senderId: 2, content: "Heyy" },
  {
    id: 2,
    senderId: 2,
    content: "What do you think about this messaging app? 🤔",
  },
  { id: 3, senderId: 1, content: "This is the greatest I ever saw!!!" },
  { id: 4, senderId: 2, content: "Whooah! 😄" },
];

function Chat() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex-1">
        <MessageContainer messages={messages} />
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
