import React from "react";

type Props = {
  isActive: boolean;
};

function ContactOnlineStatus(props: Props) {
  let bgColor = "bg-gray-500";
  let title = "Inactive";

  if (props.isActive) {
    bgColor = "bg-green-500";
    title = "Active";
  }

  return <div className={`w-3 h-3 rounded-full ${bgColor}`} title={title} />;
}

export default ContactOnlineStatus;
