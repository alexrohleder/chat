import {
  default as NextDocument,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="overflow-y-scroll">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
