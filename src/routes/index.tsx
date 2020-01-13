import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoute from "components/private-route";

// import { routeDefs } from "./routeDefs";

// import Layout from './components/Layout';
import BoardSelector from "components/pages/board-selector";
import BoardView from "components/pages/board-view";
import Login from "components/pages/login";
// import NotFound from './components/pages/NotFound';

const Routes = () => (
  <Router>
    {/* <Layout> */}
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <PrivateRoute exact path="/boards" component={BoardSelector} />
      <Route exact path={"/board/:id"} component={BoardView} />
      <Redirect
        to={{
          pathname: "/login"
        }}
      />
      {/* <Route component={NotFound} /> */}
    </Switch>
    {/* </Layout> */}
  </Router>
);

export default Routes;
