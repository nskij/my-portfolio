import React, { Component } from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';

class SkillCard extends Component {
  render(){
    const skillList = [
    ];

    return (
      <React.Fragment>
        {skillList.map((skillItem => {
          return (
            <div className = "card">
              <Typography variant="h5" component="h3">
                {skillItem.skill}
              </Typography>
              <Typography component="p">
                {skillItem.explain}
              </Typography>
            </div>
          );
        }))}
      </React.Fragment>
    );
  }
}
export default SkillCard;