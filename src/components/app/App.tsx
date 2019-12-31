import React from "react";
import Routes from "routes";
// Apollo Imports
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

//#region Material UI Setup
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
//#endregion

//#region Fontawesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import NavBar from "components/nav-bar/NavBar";
import StoreContainer from "store";

library.add(faPlus, faPlusCircle);
//#endregion

//#region Apollo Setup
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_URL as string,
  options: {
    reconnect: true,
    connectionParams: () => ({
      // TODO: Login stuff
      // Authorization: token ? `Bearer ${token}` : ""
      Authorization: process.env.REACT_APP_TEST_TOKEN
    })
  }
});

const authLink = setContext((_, { headers }) => {
  //const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      // TODO: Login stuff
      // Authorization: token ? `Bearer ${token}` : ""
      Authorization: process.env.REACT_APP_TEST_TOKEN
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

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline>
        <StoreContainer.Provider>
          <NavBar />
          <Routes />
        </StoreContainer.Provider>
      </CssBaseline>
    </ApolloProvider>
  );
};

export default App;
