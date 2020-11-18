import Layout from "../components/Layout";
import ContactList from "../components/ContactList";

const contacts = [
  {
    id: 2,
    name: "Alex Rohleder",
    photo: "/profiles/alexrohleder.jpg",
    isActive: true,
  },
];

export default function Home() {
  return (
    <Layout title="Chat">
      <ContactList contacts={contacts} />
      <div className="hidden lg:col-span-3 lg:bg-gray-300 lg:w-full lg:h-full lg:flex lg:items-center lg:justify-center lg:rounded-md">
        select a contact to start
      </div>
    </Layout>
  );
}
