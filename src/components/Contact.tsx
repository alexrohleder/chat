import React from "react";
import ContactAvatar from "./ContactAvatar";
import ContactOnlineStatus from "./ContactOnlineStatus";

type Props = {
  name: string;
  photo: string;
  lastMessage?: string;
  isActive: boolean;
  isSelected?: boolean;
};

function Contact(props: Props) {
  const variant = props.isSelected
    ? "bg-gray-200 border-gray-400"
    : "hover:bg-gray-200 hover:border-gray-400 cursor-pointer transition-colors ease-in-out duration-150";

  return (
    <div className={`flex gap-4 items-center p-4 rounded-md border ${variant}`}>
      <ContactAvatar size="lg" src={props.photo} name={props.name} />
      <div className="flex flex-1 flex-col gap-1 overflow-hidden">
        <div className="flex justify-between items-center overflow-hidden">
          <div className="font-bold truncate">{props.name}</div>
          <ContactOnlineStatus isActive={props.isActive} />
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
