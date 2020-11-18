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
      <div className="hidden md:block md:col-span-3">
        select a contact to start
      </div>
    </Layout>
  );
}
