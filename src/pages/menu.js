import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Top from './top';
import About from './about';
import Skill from './skill';
import Works from './works';
import Contact from './contact';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#B2D6B5' }, //green
    secondary: { main: '#19A591' },
  },
});

function LinkTab(props) {
  return (
    <Tab
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function MenuTabs() {
const [value, setValue] = React.useState(0);

function handleChange(event, newValue) {
  setValue(newValue);
}

  return(
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <div className="container">
          <h1 className="title">@nskij</h1>
          <Tabs value={value} onChange={handleChange} >
            <LinkTab label="Top"/>
            <LinkTab label="About"/>
            <LinkTab label="Works" />
            <LinkTab label="Skill" />
            <LinkTab label="Contact" />
          </Tabs>
        </div>
      </AppBar>
      {value === 0 && <TabContainer><Top /></TabContainer>}
      {value === 1 && <TabContainer><About /></TabContainer>}
      {value === 2 && <TabContainer><Works /></TabContainer>}
      {value === 3 && <TabContainer><Skill /></TabContainer>}
      {value === 4 && <TabContainer><Contact /></TabContainer>}
    </ThemeProvider>
  );
}

export default MenuTabs;