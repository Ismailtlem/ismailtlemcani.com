import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Ismail Tlemcani - Software developer",
    description: "",
    image: "",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
