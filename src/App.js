import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import store from './redux/reduxConfig';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/details">Details</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
