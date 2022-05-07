import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Signup, Login } from 'Routes';

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};
