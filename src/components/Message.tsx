import React from "react";

type Props = {
  content: string;
  isReceived: boolean;
};

function Message(props: Props) {
  const variant = props.isReceived ? "bg-blue-700 text-white" : "bg-gray-300";

  return (
    <div className={`px-4 py-2 rounded-full inline-block ${variant}`}>
      {props.content}
    </div>
  );
}

export default Message;
