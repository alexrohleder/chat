import React from "react";
import ContactAvatar, { Props as ContactAvatarProps } from "./ContactAvatar";

type Props = ContactAvatarProps & {
  isActive: boolean;
};

function ContactAvatarStatus({ isActive, ...contactAvatarProps }: Props) {
  const borderColor = isActive ? "border-green-500" : "border-gray-500";

  return (
    <div className={`border-4 rounded-full ${borderColor}`}>
      <ContactAvatar {...contactAvatarProps} />
    </div>
  );
}

export default ContactAvatarStatus;
