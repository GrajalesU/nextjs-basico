import Layout from "components/Layout";
import { AppProps } from "next/app";
import CartProvider from "store/Cart";
import "styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Providers - context/providers, Theme, data
  // Layout
  // additional props
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
