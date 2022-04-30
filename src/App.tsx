import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Signup, Login, PrivateRoute, Dashboard } from 'Routes';
import { Header } from 'components';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};
