import React from "react";
import { Route, Switch } from "react-router-dom";

import User from "./list";
import UserView from "./view";

const UserRouter = () => {
  return (
    <Switch>
      <Route path="/user/:id" component={UserView} />
      <Route path="/" component={User} />
    </Switch>
  );
};

export default UserRouter;
