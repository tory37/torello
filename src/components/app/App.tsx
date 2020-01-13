import React, { useState, useEffect } from "react";
import Routes from "routes";
import ApolloWrapper from "components/app/apollo-wrapper";
import { useLazyGetLoggedInUserQuery } from "graphql/queries/getLoggedInUser";
import jwtDecode from "jwt-decode";

//#region Material UI Setup
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
//#endregion

//#region DND Setup
import { DndProvider } from "react-dnd";
import DndBackend from "react-dnd-html5-backend";
//#endregion

//#region Fontawesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import NavBar from "components/nav-bar/NavBar";
import StoreContainer from "store";
import { makeStyles } from "@material-ui/core";
import Authenticator from "components/authenticator";

library.add(faPlus, faPlusCircle);
//#endregion

const getStyles = () => {
  return makeStyles({
    app: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    appContent: {
      flexGrow: 1,
      overflowY: "auto"
    }
  });
};

const App = () => {
  const styles = getStyles()();

  return (
    <StoreContainer.Provider>
      <Authenticator>
        <ApolloWrapper>
          <CssBaseline>
            <DndProvider backend={DndBackend}>
              <div className={styles.app}>
                <NavBar />
                <div className={styles.appContent}>
                  <Routes />
                </div>
              </div>
            </DndProvider>
          </CssBaseline>
        </ApolloWrapper>
      </Authenticator>
    </StoreContainer.Provider>
  );
};

export default App;
