import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import Routes from "routes";

//#region Fontawesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);
//#endregion

const App = () => {
  return <Routes />;
};

export default withAuthenticator(App);
