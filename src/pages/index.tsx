import Layout from "../components/Layout";
import ContactList from "../components/ContactList";

export default function HomePage() {
  return (
    <Layout title="Chat">
      <div className="lg:w-1/4">
        <ContactList />
      </div>
      <div className="hidden lg:flex-1 lg:col-span-3 lg:bg-gray-300 lg:flex lg:items-center lg:justify-center lg:rounded-md">
        Select a contact to start
      </div>
    </Layout>
  );
}
