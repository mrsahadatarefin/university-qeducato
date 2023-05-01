import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        <title>ScholarBridge</title>
        <script
          src="https://kit.fontawesome.com/ba1543d48e.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
