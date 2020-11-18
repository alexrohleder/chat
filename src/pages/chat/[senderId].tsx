import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Chat from "../../components/Chat";
import ContactList from "../../components/ContactList";

const contacts = [
  {
    id: 2,
    name: "Alex Rohleder",
    photo: "/profiles/alexrohleder.jpg",
    isActive: true,
  },
];

export default function ChatPage() {
  const router = useRouter();

  return (
    <Layout title="Chat">
      <div className="hidden lg:block">
        <ContactList
          contacts={contacts}
          selectedUserId={parseInt(router.query.senderId as string, 10)}
        />
      </div>
      <div className="md:col-span-3">
        <Chat />
      </div>
    </Layout>
  );
}
