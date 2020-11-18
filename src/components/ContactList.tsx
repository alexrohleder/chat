import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";
import { contactsAtom } from "../state";
import Contact from "./Contact";

type Props = {
  selectedUserId?: number;
};

function ContactList(props: Props) {
  const [contacts] = useAtom(contactsAtom);

  return (
    <div className="flex flex-col gap-2 lg:sticky" style={{ top: 80 }}>
      {contacts.map((contact) => (
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
