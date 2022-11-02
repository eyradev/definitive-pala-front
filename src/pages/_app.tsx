import { ApolloProvider } from "@apollo/client";
import { useApollo } from "clients/apollo-client";
import { CartSidebar } from "components/cart";
import { Notification } from "components/UI";
import type { AppProps } from "next/app";
import Head from "next/head";
import AppProvider from "providers/AppProvider/AppProvider";
import withNotification from "providers/NotificationProvider/withNotification";
import UserProvider from "providers/UserProvider";
import { FC, ReactNode } from "react";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/now-ui-kit.min.css";

const Noop: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <Head>
          <meta name="theme-color" content="#000000" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <UserProvider>
          {/* <CartProvider>
          <AddressProvider> */}
          <Layout pageProps={pageProps}>
            <Notification />
            <Component {...pageProps} />
          </Layout>
          <CartSidebar />
          {/* 
          </AddressProvider>
        </CartProvider> */}
        </UserProvider>
      </AppProvider>
    </ApolloProvider>
  );
}

export default withNotification(MyApp);
