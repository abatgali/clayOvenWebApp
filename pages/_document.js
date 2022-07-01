import { Html, Head as Header, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  // useEffe
  return (
    <Html>
      <Header>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Raleway:wght@100;200;400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="dist/css/core.css" />
        <link id="theme" rel="stylesheet" href="dist/css/theme-green.css" />
      </Header>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
