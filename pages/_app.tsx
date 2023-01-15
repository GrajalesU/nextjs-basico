import Layout from "components/Layout";
import { AppProps } from "next/app";
import "styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Providers - context/providers, Theme, data
  // Layout
  // additional props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
