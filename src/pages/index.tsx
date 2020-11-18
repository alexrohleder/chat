import Layout from "../components/Layout";
import ContactList from "../components/ContactList";

export default function HomePage() {
  return (
    <Layout title="Chat">
      <ContactList />
      <div className="hidden lg:col-span-3 lg:bg-gray-300 lg:w-full lg:h-full lg:flex lg:items-center lg:justify-center lg:rounded-md">
        Select a contact to start
      </div>
    </Layout>
  );
}
