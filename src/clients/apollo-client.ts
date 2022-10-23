/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import {
  ApolloClient,
  HttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import merge from "deepmerge";
import { IncomingHttpHeaders } from "http";
import isEqual from "lodash/isEqual";
import { useEffect, useMemo } from "react";
import { onError } from "@apollo/client/link/error";
import { PalanteError } from "errors/palante.error";
import useNotification from "hooks/useNotification";
import { NotificationContextProps } from "providers/NotificationProvider/NotificationProvider";

const serverEndpoint = process.env.NEXT_PUBLIC_SERVER_ENDPOINT;

if (!serverEndpoint)
  throw new Error("The NEXT_PUBLIC_SERVER_ENDPOINT variable must be defined");

const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = (
  headers: IncomingHttpHeaders | null = null,
  addNotification: NotificationContextProps["addNotification"]
) => {
  const enhancedFetch = (url: RequestInfo, init: RequestInit) =>
    fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        "Access-Control-Allow-Origin": "*",
        Cookie: headers?.cookie ?? "",
      },
    }).then((res) => res);

  const httpLink = new HttpLink({
    uri: serverEndpoint,
    credentials: "include",
    fetch: enhancedFetch,
    headers: {
      cookie: headers && headers.cookie,
    },
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      const palanteErrors = graphQLErrors.reduce<PalanteError[]>(
        (errors, error) => {
          const { message, locations, path } = error;
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
          const palanteError = PalanteError.from(error);
          if (palanteError) errors.push(palanteError);
          return errors;
        },
        []
      );
      if (palanteErrors?.length) {
        addNotification &&
          addNotification({
            type: "danger",
            message: palanteErrors[0].message,
          });
      } else {
        addNotification &&
          addNotification({ type: "danger", message: "error" });
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const client = new ApolloClient({
    ssrMode: /*typeof window === "undefined"*/ false,
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return client;
};

type InitialState = NormalizedCacheObject | undefined;

interface IInitializeApollo {
  headers?: IncomingHttpHeaders | null;
  initialState?: InitialState | null;
}

export const initializeApollo = (
  { headers, initialState }: IInitializeApollo = {
    headers: null,
    initialState: null,
  },
  addNotification: NotificationContextProps["addNotification"]
) => {
  const _apolloClient =
    apolloClient ?? createApolloClient(headers, addNotification);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
};

export function useApollo(pageProps: any /*AppProps['pageProps']*/) {
  const { addNotification } = useNotification();

  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => {
    return initializeApollo({ initialState: state }, addNotification);
  }, [state, addNotification]);
  return store;
}
