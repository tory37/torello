import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import Routes from "routes";

//#region Material UI Setup
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
//#endregion

//#region Fontawesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavBar from "components/nav-bar/NavBar";

library.add(faPlus);
//#endregion

const App = () => {
  return (
    <CssBaseline>
      <div>
        <NavBar />
        <Routes />
      </div>
    </CssBaseline>
  );
};

export default withAuthenticator(App);
