import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Signup, Login } from 'Routes';
import { Header } from 'components';
import { handleLoadingState } from 'utils';

export const App: React.FC = () => {
  useEffect(() => {
    handleLoadingState();
  }, []);

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path='/login' component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

