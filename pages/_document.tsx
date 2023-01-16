import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/*favicon*/}
        <link rel="icon" href="/logo/aguacatesMor16.png" type="image/png" />
        {/*web font*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@200;400;600&display=swap"
          rel="stylesheet"
        />

        {/*stylesheet*/}
        {/*scripts/js*/}
      </Head>
      <body className="my-body-class">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
