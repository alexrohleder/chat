import React from "react";

type Props = {
  id: number;
  senderId: number;
  content: string;
};

function Message(props: Props) {
  const variant =
    props.senderId === 1 ? "bg-blue-700 text-white" : "bg-gray-300";

  return (
    <div className="flex gap-4 items-center">
      <div className={`px-4 py-2 rounded-full ${variant}`}>{props.content}</div>
    </div>
  );
}

export default Message;
