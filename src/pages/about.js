import React, { Component } from 'react';
import '../App.css';
import AboutCard from '../components/aboutCard';

export default class About extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <AboutCard/>
        </div>
      </React.Fragment>

    );
  }
}