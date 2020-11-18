import { AppProps } from "next/dist/next-server/lib/router/router";
import "../assets/main.css";

function Chat({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Chat;
