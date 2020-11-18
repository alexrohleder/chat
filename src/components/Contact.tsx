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
    ? "bg-gray-300 border-gray-300"
    : "hover:bg-gray-300 hover:border-gray-300 cursor-pointer transition-colors ease-in-out duration-150";

  return (
    <div
      className={`flex gap-4 items-center p-4 rounded-md border border-transparent ${variant}`}
    >
      <ContactAvatar size="lg" src={props.photo} name={props.name} />
      <div className="flex flex-1 flex-col gap-1 overflow-hidden">
        <div className="flex justify-between items-center overflow-hidden">
          <div className="font-bold truncate">{props.name}</div>
          <ContactOnlineStatus isActive={props.isActive} />
        </div>
        <div className="truncate">
          {props.lastMessage || (
            <span className="text-gray-700">Click to send a message</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
