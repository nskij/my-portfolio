import React, { Component } from 'react';
import '../App.css';
import SkillCards from '../components/skillCards';

export default class Skill extends Component {
  render() {
    return(
      <div className = "card-container">
        <SkillCards />
      </div>
    );
  }
}