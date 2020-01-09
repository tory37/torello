import React, { useEffect, useState } from "react";

// Apollo Imports
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import StoreContainer from "store";
import { ClientOptions } from "subscriptions-transport-ws";
import usePrevious from "hooks/usePrevious";
import { useLazyGetLoggedInUserQuery } from "graphql/queries/getLoggedInUser";

//#region Setup
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL
});

const getWsLink = (authToken: string | null) => {
  const options: ClientOptions | undefined = {
    reconnect: true
  };

  if (authToken && authToken.length > 0) {
    options.connectionParams = () => ({
      Authorization: `Bearer ${authToken}`
    });
  }

  return new WebSocketLink({
    uri: process.env.REACT_APP_WS_URL as string,
    options
  });
};

const getAuthLink = (authToken: string | null) =>
  setContext((_, { headers }) => {
    const _headers = {
      ...headers
    };

    if (authToken && authToken.length > 0) {
      _headers.Authorization = `Bearer ${authToken}`;
    }

    return {
      headers: {
        headers: _headers,
        Authorization: authToken ? `Bearer ${authToken}` : ""
      }
    };
  });

const getLink = (authToken: string | null) =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    getWsLink(authToken),
    httpLink
  );

const getClient = (authToken: string | null) =>
  new ApolloClient({
    link: getAuthLink(authToken).concat(getLink(authToken)),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network"
      },
      query: {
        fetchPolicy: "network-only"
      }
    }
  });
//#endregion

interface IApolloWrapperProps {
  children: React.ReactNode;
}

const ApolloWrapper = ({ children }: IApolloWrapperProps) => {
  const { authToken } = StoreContainer.useContainer().auth;
  const prevAuthToken = usePrevious<string | null>(authToken);

  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>(
    getClient(authToken)
  );

  useEffect(() => {
    if (prevAuthToken !== authToken) {
      setClient(getClient(authToken));
    }
  }, [authToken]);

  interface IGetUserProps {
    children: React.ReactNode;
    authToken: string | null;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
