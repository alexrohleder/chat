import React from "react";

type Props = {
  content: string;
  isReceived: boolean;
};

function Message(props: Props) {
  const variant = props.isReceived ? "bg-gray-300" : "bg-blue-700 text-white";

  return (
    <div className="flex gap-4 items-center">
      <div className={`px-4 py-2 rounded-full ${variant}`}>{props.content}</div>
    </div>
  );
}

export default Message;
