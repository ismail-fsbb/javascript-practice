import Nav from "@/components/nav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
