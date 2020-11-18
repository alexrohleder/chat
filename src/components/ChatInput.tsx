import React from "react";

function ChatInput() {
  return (
    <div className="flex gap-4 bg-white border border-gray-200 rounded-md p-4">
      <input
        className="h-full flex-1 border border-gray-200 p-2"
        placeholder="Write a message..."
        autoComplete="off"
        autoFocus
      />
      <button className="btn">Send</button>
    </div>
  );
}

export default ChatInput;
