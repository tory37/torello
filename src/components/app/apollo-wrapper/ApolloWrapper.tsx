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

// const getWsClient = () => {
//   return new SubscriptionClient(process.env.REACT_APP_WS_URL as string, {
//     reconnect: true,
//     connectionParams: () => {
//       return {
//         headers: {
//           Authorization: token ? `Bearer ${token}` : ``
//         }
//       };
//     }
//   });
// };

const getWsLink = () => {
  const token = localStorage.getItem(authTokenKey);
  return new WebSocketLink({
    uri: process.env.REACT_APP_WS_URL as string,
    options: {
      reconnect: true,
      connectionParams: () => ({
        // TODO: Login stuff
        // Authorization: token ? `Bearer ${token}` : ""
        Authorization: token ? `Bearer ${token}` : ``
      })
    }
  });
};

// const wsLink = new WebSocketLink({
//   uri: process.env.REACT_APP_WS_URL as string,
//   options: {
//     reconnect: true
//   }
// });

const authLink = setContext((_, { headers }) => {
  //const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      // TODO: Login stuff
      // Authorization: token ? `Bearer ${token}` : ""
      Authorization: localStorage.getItem(authTokenKey)
        ? `Bearer ${localStorage.getItem(authTokenKey)}`
        : ""
    }
  };
});

const getLink = () =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    getWsLink(),
    httpLink
  );

const getClient = () =>
  new ApolloClient({
    link: authLink.concat(getLink()),
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
  const [client, setClient] = useState<ApolloClient<any> | null>(null);

  useEffect(() => {
    setClient(getClient());
  }, []);

  return (
    <React.Fragment>
      {client && <ApolloProvider client={client}>{children}</ApolloProvider>}
      {!client && <div>Loading...</div>}
    </React.Fragment>
  );
};

export default ApolloWrapper;
