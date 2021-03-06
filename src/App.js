import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import RoomListPage from './pages/roomListPage';
import RoomDetailPage from './pages/roomDetailPage';
import NotFoundPage from './pages/notFoundPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/list">
            <RoomListPage />
          </Route>
          <Route exact path="/detail/:itemId">
            <RoomDetailPage />
          </Route>
          <Redirect from="/" exact to="/list" />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default hot(module)(App);
