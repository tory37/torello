import React from "react";

// Apollo Imports
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

//#region Setup
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL
});

const googleToken = localStorage.getItem("torello_auth_token");

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_URL as string,
  options: {
    reconnect: true,
    connectionParams: () => ({
      Authorization: googleToken ? `Bearer ${googleToken}` : ""
    })
  }
});

const authLink = setContext((_, { headers }) => {
  //const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: googleToken ? `Bearer ${googleToken}` : ""
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
  return <ApolloProvider client={client}>{{ children }}</ApolloProvider>;
};

export default ApolloWrapper;
