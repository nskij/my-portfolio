import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SimpleTabs from './components/menu';

export default class App extends Component {
  render() {
    return(
      <Router>
        <React.Fragment>
            <div className="row">

              <Switch>
                <Route exact path="/" component={SimpleTabs} />
              </Switch>

            </div>
        </React.Fragment>
      </Router>
    );
  }
}
