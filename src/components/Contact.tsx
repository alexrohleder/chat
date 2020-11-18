import React from "react";
import ContactAvatarStatus from "./ContactAvatarStatus";

type Props = {
  name: string;
  photo: string;
  lastMessage?: string;
  lastTimestampSeem?: number;
  isActive: boolean;
  isSelected: boolean;
  onClick: () => void;
};

function Contact(props: Props) {
  const variant = props.isSelected
    ? "bg-gray-200 border-gray-400"
    : "hover:bg-gray-200 hover:border-gray-400 cursor-pointer transition-colors ease-in-out duration-150";

  return (
    <div
      className={`flex gap-4 items-center p-4 rounded-md border ${variant}`}
      onClick={props.onClick}
    >
      <ContactAvatarStatus
        size="lg"
        src={props.photo}
        name={props.name}
        isActive={props.isActive}
      />
      <div className="flex flex-col gap-1 overflow-hidden">
        <div className="flex justify-between overflow-hidden">
          <div className="font-bold truncate">{props.name}</div>
          <div className="text-gray-700">{props.lastTimestampSeem}</div>
        </div>
        {props.lastMessage ? (
          <div className="truncate">{props.lastMessage}</div>
        ) : (
          <div className="text-gray-700">Click to send a message</div>
        )}
      </div>
    </div>
  );
}

export default Contact;
