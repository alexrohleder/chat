import React from "react";

export type Props = {
  src: string;
  name: string;
  size: "sm" | "lg";
};

function ContactAvatar(props: Props) {
  const sizes =
    props.size === "sm" ? { width: 16, height: 16 } : { width: 48, height: 48 };

  return (
    <img
      {...sizes}
      src={props.src}
      className="rounded-full"
      alt={`Avatar of ${props.name}`}
    />
  );
}

export default ContactAvatar;
