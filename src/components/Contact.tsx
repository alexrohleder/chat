import React from "react";
import { User } from "../state";
import ContactAvatar from "./ContactAvatar";
import ContactOnlineStatus from "./ContactOnlineStatus";

type Props = User & {
  isSelected?: boolean;
};

function Contact(props: Props) {
  const variant = props.isSelected
    ? "bg-gray-300"
    : "hover:bg-gray-300 cursor-pointer transition-colors ease-in-out duration-150";

  return (
    <div
      className={`flex gap-4 items-center -mx-4 p-4 lg:m-0 lg:p-4 lg:rounded-md ${variant}`}
    >
      <ContactAvatar size="lg" src={props.photo} name={props.name} />
      <div className="flex flex-1 flex-col gap-1 overflow-hidden">
        <div className="flex justify-between items-center overflow-hidden">
          <div className="font-bold truncate">{props.name}</div>
          <ContactOnlineStatus isActive={props.isActive} />
        </div>
        <div className="truncate text-gray-700 text-sm">
          Click to send a message
        </div>
      </div>
    </div>
  );
}

export default Contact;
