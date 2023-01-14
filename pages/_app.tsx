import Layout from "components/Layout";
import { AppProps } from "next/app";

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
