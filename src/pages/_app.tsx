import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/bootstrap.min.css";
import "../styles/now-ui-kit.min.css";
import { FC, ReactNode } from "react";
import { useApollo } from "clients/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { Notification } from "components/UI";
import { CartSidebar } from "components/cart";
import NotificationProvider from "providers/NotificationProvider";
import UserProvider from "providers/UserProvider";
import CartProvider from "providers/CartProvider";
import AddressProvider from "providers/AddressProvider";
import Head from "next/head";

const Noop: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NotificationProvider>
        <UserProvider>
          {/*<CartProvider>
            <AddressProvider> */}
          <Layout pageProps={pageProps}>
            <Notification />
            <Component {...pageProps} />
          </Layout>
          {/* <CartSidebar />
            </AddressProvider>
          </CartProvider>*/}
        </UserProvider>
      </NotificationProvider>
    </ApolloProvider>
  );
}

export default MyApp;
