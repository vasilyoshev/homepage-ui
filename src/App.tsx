import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About } from 'Routes';
import { Header } from 'components';
import { handleLoadingState } from 'utils';
import './App.module.scss';

export const App: React.FC = () => {
  useEffect(() => {
    handleLoadingState();
  }, []);

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

