import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { routeDefs } from "./routeDefs";

// import Layout from './components/Layout';
import BoardSelector from "components/pages/board-selector";
// import NotFound from './components/pages/NotFound';

const Routes = () => (
  <Router>
    {/* <Layout> */}
    <Switch>
      <Route exact path={"/boards"} component={BoardSelector} />
      {/* <Route component={NotFound} /> */}
    </Switch>
    {/* </Layout> */}
  </Router>
);

export default Routes;
