import React from 'react';
import Nav from './Nav';
import Home from './Home';
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movies" exact component={MovieList}/>
        <Route path="/movies/:id" component={MovieDetail}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
