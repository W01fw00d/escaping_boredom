import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';

import theme from './styles/global-styles';
import ItemListPage from './pages/itemListPage';
import ItemDetailPage from './pages/itemDetailPage';
import NotFoundPage from './pages/notFoundPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/list">
              <ItemListPage />
            </Route>
            <Route exact path="/detail/:itemId">
              <ItemDetailPage />
            </Route>
            <Redirect from="/" exact to="/list" />
            <Route component={NotFoundPage} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default hot(module)(App);
