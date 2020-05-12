import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
