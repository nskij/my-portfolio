import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class SkillCard extends Component {
  render(){
    return (
      <React.Fragment>
        <div className = "card">
          <Typography variant="h5" component="h3">
            {this.props.skill}
          </Typography>
          <Typography component="p">
            {this.props.explain}
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}
export default SkillCard;