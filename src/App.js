import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import store from './redux/reduxConfig';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/countries/:name">
            <Details />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
