import Link from "next/link";
import React from "react";
import Contact from "./Contact";

type Props = {
  contacts: any[];
  selectedUserId?: number;
};

function ContactList(props: Props) {
  return (
    <div className="flex flex-col gap-4">
      {props.contacts.map((contact) => (
        <Link href={`/chat/${contact.id}`} key={contact.id}>
          <a>
            <Contact
              {...contact}
              isSelected={props.selectedUserId == contact.id}
            />
          </a>
        </Link>
      ))}
    </div>
  );
}

export default ContactList;
