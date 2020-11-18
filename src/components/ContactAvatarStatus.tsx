import React from "react";
import ContactAvatar, { Props as ContactAvatarProps } from "./ContactAvatar";

type Props = ContactAvatarProps & {
  isActive: boolean;
};

function ContactAvatarStatus({ isActive, ...contactAvatarProps }: Props) {
  const bgColor = isActive ? "bg-green-500" : "bg-gray-500";

  return (
    <div className="relative">
      <ContactAvatar {...contactAvatarProps} />
      <div
        className={`h-4 w-4 rounded-full absolute right-0 bottom-0 shadow-md ${bgColor}`}
      />
    </div>
  );
}

export default ContactAvatarStatus;
