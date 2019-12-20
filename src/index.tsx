import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";

import { createAuthLink, AuthOptions } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

import appSyncConfig from "aws-exports";
import Amplify, { Auth } from "aws-amplify";
import { ApolloProvider } from "@apollo/react-hooks";

import { defaultState, typeDefs, resolvers } from "store";

Amplify.configure(appSyncConfig);

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
  jwtToken: async () =>
    (await Auth.currentSession()).getIdToken().getJwtToken(),
  type: appSyncConfig.aws_appsync_authenticationType
} as AuthOptions;

const httpLink = createHttpLink({ uri: url });

const cache = new InMemoryCache();

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink(url, httpLink)
]);

const client = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers
});

cache.writeData(defaultState);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
