import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Chat from "../../components/Chat";
import ContactList from "../../components/ContactList";

export default function ChatPage() {
  const router = useRouter();
  const contactId = parseInt(router.query.contactId as string, 10);

  return (
    <Layout title="Chat">
      <div className="hidden lg:block lg:w-1/4">
        <ContactList selectedUserId={contactId} />
      </div>
      <div className="flex-1">
        <Chat contactId={contactId} />
      </div>
    </Layout>
  );
}
