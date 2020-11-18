import { Message, User } from "./state";

export const messagesFixture: Message[] = [
  {
    id: 1,
    senderId: 2,
    receiverId: 1,
    content: "Heyy",
  },
  {
    id: 2,
    senderId: 2,
    receiverId: 1,
    content: "What do you think about this messaging app? 🤔",
  },
  {
    id: 3,
    senderId: 1,
    receiverId: 2,
    content: "This is the greatest I ever saw!!!",
  },
  {
    id: 4,
    senderId: 2,
    receiverId: 1,
    content: "Whooah! 😄",
  },
];

export const userFixture: User = {
  id: 1,
  name: "Alex Rohleder",
  photo:
    "https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABECJjFv8C4xtbe3gEiC3ZjYXJkX3Bob3RvKig0YjNlNmE1ODQ5NWZjNzllMDllMDU3N2QyY2FhY2ZhYjNmNDA4YzUzMAFMtOR9xEnNGsxDGiISt1LvpPiOzw?sz=40",
  isActive: true,
};

export const contactsFixture: User[] = [
  {
    id: 2,
    name: "Issaaf Kattan",
    photo:
      "https://www.google.com/s2/u/0/photos/private/AIbEiAIAAABECIHnrOW_9MKipAEiC3ZjYXJkX3Bob3RvKihmMzViOGQ3NDJhOTI2YjAxMWQzZDc3YjZhMTRmZTY0MDc2YThjYjcyMAFKf7SHss5mNYGtuGSDc2jY3HbVqQ?sz=40",
    isActive: true,
  },
  {
    id: 3,
    name: "Matt Murphy",
    photo:
      "https://www.google.com/s2/u/0/photos/private/AIbEiAIAAABDCPmN48yJ8tPEWiILdmNhcmRfcGhvdG8qKDM2YjBjOTIxMzA5OGM3MmUzMjRlMjNhZTJkMzc5MjE5MmI4MzNmODAwAcKP7-wqo7tvBRVMg0C1-4V-INWz?sz=40",
    isActive: false,
  },
];
