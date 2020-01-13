import React, { useState, useEffect } from "react";
import { authTokenKey } from "utils/auth";

// Apollo Imports
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { SubscriptionClient } from "subscriptions-transport-ws";

//#region Setup
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_URL as string,
  options: {
    reconnect: true
  }
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: localStorage.getItem(authTokenKey)
        ? `Bearer ${localStorage.getItem(authTokenKey)}`
        : ""
    }
  };
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: authLink.concat(link),
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
  return (
    <React.Fragment>
      {client && <ApolloProvider client={client}>{children}</ApolloProvider>}
      {!client && <div>Loading...</div>}
    </React.Fragment>
  );
};

export default ApolloWrapper;
