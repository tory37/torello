import React from "react";
import Routes from "routes";
import ApolloClient, { InMemoryCache } from "apollo-boost";
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
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  request: operation => {
    const token = localStorage.getItem("auth-token");
    operation.setContext({
      headers: {
        // TODO: Login stuff
        // Authorization: token ? `Bearer ${token}` : ""
        Authorization: process.env.REACT_APP_TEST_TOKEN
      }
    });
  },
  cache: new InMemoryCache()
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
