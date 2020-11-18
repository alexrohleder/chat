import { Provider } from "jotai";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../assets/main.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
