import React from 'react';
import Nav from './Nav';
import Home from './Home';
import MovieList from "./MovieList";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movies" component={MovieList}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
