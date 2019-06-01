import React, { Component } from 'react';
import '../App.css';
import ProfileCard from '../components/profileCard';

export default class About extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <ProfileCard/>
        </div>
      </React.Fragment>

    );
  }
}