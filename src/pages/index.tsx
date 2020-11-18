import Layout from "../components/Layout";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <Layout title="Chat">
      <div className="grid md:grid-cols-4 h-full">
        <div />
        <div className="md:col-span-3">
          <Chat />
        </div>
      </div>
    </Layout>
  );
}
