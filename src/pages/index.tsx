import Layout from "../components/Layout";
import Chat from "../components/Chat";
import Contact from "../components/Contact";
import { useState } from "react";

export default function Home() {
  const [isContactSelected, setContactSelected] = useState(false);

  return (
    <Layout title="Chat">
      <div className="grid md:grid-cols-4 gap-4 h-full">
        <div>
          <Contact
            name="Alex"
            photo="/profiles/alexrohleder.jpg"
            isActive
            isSelected={isContactSelected}
            onClick={() => setContactSelected(true)}
          />
        </div>
        <div className="md:col-span-3">{isContactSelected && <Chat />}</div>
      </div>
    </Layout>
  );
}
