import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuTabs from './pages/menu';
import Skill from './pages/skill';

export default class App extends Component {
  render() {
    return(


      
      <Router>
        <React.Fragment>
            <div className="row">
              <Switch>
                <Route exact path = "/" component = { MenuTabs } />
                <Route path = "/works" component = { Skill } />
              </Switch>
            </div>
        </React.Fragment>
      </Router>
    );
  }
}
